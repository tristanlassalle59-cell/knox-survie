let stack = [{kind:'menu', key:'root'}];
let hlIndex = 0;
let selectableCount = 0;

let soundEnabled = localStorage.getItem('knoxSound') !== 'off';
let audioCtx = null;

function ensureAudio(){
  if (!audioCtx){ audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
  if (audioCtx.state === 'suspended'){ audioCtx.resume(); }
  return audioCtx;
}

function beep(freq, duration, volume, type){
  if (!soundEnabled) return;
  const ctx = ensureAudio();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type || 'square';
  osc.frequency.value = freq;
  osc.connect(gain);
  gain.connect(ctx.destination);
  const now = ctx.currentTime;
  gain.gain.setValueAtTime(volume, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
  osc.start(now);
  osc.stop(now + duration);
}

function playClickSound(){
  if (!soundEnabled) return;
  const ctx = ensureAudio();
  const duration = 0.02;
  const size = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, size, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < size; i++){
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / size, 3);
  }
  const noise = ctx.createBufferSource();
  noise.buffer = buffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 1100;
  filter.Q.value = 0.9;
  const gain = ctx.createGain();
  gain.gain.value = 0.22;
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);
  noise.start();
}

function playMove(){ beep(720, 0.02, 0.02); }
function playConfirm(){ playClickSound(); }
function playBack(){ beep(480, 0.06, 0.03); }
function playDeny(){ beep(160, 0.12, 0.025, 'sawtooth'); }

function setupSoundToggle(){
  const btn = document.getElementById('sound-toggle');
  if (!btn) return;
  const sync = () => {
    btn.textContent = 'SON: ' + (soundEnabled ? 'ON' : 'OFF');
    btn.classList.toggle('on', soundEnabled);
  };
  sync();
  btn.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem('knoxSound', soundEnabled ? 'on' : 'off');
    sync();
    if (soundEnabled){
      ensureAudio();
      playConfirm();
    }
  });
}
setupSoundToggle();

function topScreen(){ return stack[stack.length - 1]; }

function push(entry){ stack.push(entry); hlIndex = 0; render(); }

function pop(){ if (stack.length > 1){ playBack(); stack.pop(); hlIndex = 0; render(); } }

function activeMenuEntry(){
  const s = topScreen();
  return s.kind === 'menu' ? s : stack[stack.length - 2];
}

function render(){
  const s = topScreen();
  const leafActive = s.kind !== 'menu';

  renderMenuPane(activeMenuEntry(), !leafActive, leafActive ? s : null);

  if (s.kind === 'file'){
    renderLeaf(files[s.key].path, files[s.key].content, null);
  } else if (s.kind === 'article'){
    renderArticle(articles[s.key], s.key);
  } else {
    renderDetailPlaceholder();
  }

  const layout = document.getElementById('layout');
  layout.classList.add('visible');
  layout.classList.toggle('showing-detail', leafActive);
}

function renderMenuPane(entry, isActive, currentLeaf){
  const node = nodes[entry.key];
  const pane = document.getElementById('pane-menu');
  pane.innerHTML = '';

  if (isActive){ document.getElementById('top-path').textContent = node.path; }

  const wrap = document.createElement('div');
  wrap.className = 'screen-fade';

  const crumb = document.createElement('div');
  crumb.className = 'breadcrumb';
  crumb.textContent = node.path;
  wrap.appendChild(crumb);

  if (stack.length > 1){
    const retour = document.createElement('div');
    retour.className = 'retour';
    if (isActive) retour.id = 'sel-0';
    retour.innerHTML = '&lt; RETOUR';
    if (isActive) retour.addEventListener('mouseenter', () => setHighlight(0));
    retour.addEventListener('click', pop);
    wrap.appendChild(retour);
  }

  const ul = document.createElement('ul');
  ul.className = 'menu-list';
  const offset = stack.length > 1 ? 1 : 0;
  node.items.forEach((it, i) => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    if (currentLeaf && it.action.type === currentLeaf.kind && it.action.key === currentLeaf.key){
      li.classList.add('current');
    }
    if (isActive) li.id = 'sel-' + (i + offset);
    li.innerHTML = `<span class="tag">${it.tag}</span><span class="label">${it.label}</span><span class="arrow">&gt;</span>`;
    if (isActive) li.addEventListener('mouseenter', () => setHighlight(i + offset));
    li.addEventListener('click', () => selectItem(i + offset));
    ul.appendChild(li);
  });
  wrap.appendChild(ul);

  const stubMsg = document.createElement('div');
  stubMsg.className = 'stub-msg';
  stubMsg.id = 'stub-msg';
  wrap.appendChild(stubMsg);

  const hint = document.createElement('div');
  hint.className = 'hint';
  hint.innerHTML = '↑↓ pour naviguer · <b>Entrée</b> ou clic pour sélectionner';
  wrap.appendChild(hint);

  pane.appendChild(wrap);

  if (isActive){
    selectableCount = node.items.length + offset;
    setHighlight(0, true);
  }
}

function renderDetailPlaceholder(){
  const pane = document.getElementById('pane-detail');
  pane.innerHTML = '';
  const msg = document.createElement('div');
  msg.className = 'detail-placeholder screen-fade';
  msg.textContent = '// sélectionne un élément dans la liste';
  pane.appendChild(msg);
}

let leafActions = [];

function renderLeaf(path, textContent, extraNode, navButtons){
  const pane = document.getElementById('pane-detail');
  pane.innerHTML = '';
  document.getElementById('top-path').textContent = path;
  leafActions = [];

  const wrap = document.createElement('div');
  wrap.className = 'screen-fade';

  const crumb = document.createElement('div');
  crumb.className = 'breadcrumb';
  crumb.textContent = path;
  wrap.appendChild(crumb);

  const retour = document.createElement('div');
  retour.className = 'retour';
  retour.id = 'sel-0';
  retour.innerHTML = '&lt; RETOUR';
  retour.addEventListener('mouseenter', () => setHighlight(0));
  retour.addEventListener('click', pop);
  wrap.appendChild(retour);
  leafActions.push(pop);

  if (extraNode){ wrap.appendChild(extraNode); }

  if (textContent){
    const body = document.createElement('div');
    body.className = 'file-body';
    body.textContent = textContent;
    wrap.appendChild(body);
  }

  if (navButtons && navButtons.length){
    const nav = document.createElement('div');
    nav.className = 'art-nav';
    navButtons.forEach(btn => {
      const idx = leafActions.length;
      const el = document.createElement('div');
      el.className = 'art-nav-btn';
      el.id = 'sel-' + idx;
      el.textContent = btn.label;
      el.addEventListener('mouseenter', () => setHighlight(idx));
      el.addEventListener('click', () => btn.handler());
      nav.appendChild(el);
      leafActions.push(btn.handler);
    });
    wrap.appendChild(nav);
  }

  const hint = document.createElement('div');
  hint.className = 'hint';
  hint.innerHTML = '<b>Entrée</b> ou clic pour sélectionner';
  wrap.appendChild(hint);

  pane.appendChild(wrap);

  selectableCount = leafActions.length;
  setHighlight(0, true);
}

function renderBlock(block){
  if (block.type === 'tagline'){
    const el = document.createElement('div');
    el.className = 'art-tagline';
    el.textContent = block.text;
    return el;
  }
  if (block.type === 'paragraph'){
    const el = document.createElement('p');
    el.className = 'art-paragraph';
    el.textContent = block.text;
    return el;
  }
  if (block.type === 'subtitle'){
    const el = document.createElement('div');
    el.className = 'art-subtitle';
    el.textContent = block.text;
    return el;
  }
  if (block.type === 'bullets'){
    const ul = document.createElement('ul');
    ul.className = 'art-bullets';
    block.items.forEach(b => {
      const li = document.createElement('li');
      li.textContent = b;
      ul.appendChild(li);
    });
    return ul;
  }
  if (block.type === 'callout'){
    const box = document.createElement('div');
    box.className = 'art-callout';
    const lbl = document.createElement('div');
    lbl.className = 'lbl';
    lbl.textContent = block.label;
    const p = document.createElement('p');
    p.textContent = block.text;
    box.appendChild(lbl);
    box.appendChild(p);
    return box;
  }
  if (block.type === 'cards'){
    const grid = document.createElement('div');
    grid.className = 'art-cards';
    block.items.forEach(c => {
      const card = document.createElement('div');
      card.className = 'art-card';
      const h = document.createElement('div');
      h.className = 'art-card-title';
      h.textContent = c.title;
      const p = document.createElement('p');
      p.textContent = c.text;
      card.appendChild(h);
      card.appendChild(p);
      grid.appendChild(card);
    });
    return grid;
  }
  return document.createElement('div');
}

function articleOrder(){
  const entry = activeMenuEntry();
  return nodes[entry.key].items
    .filter(it => it.action && it.action.type === 'article')
    .map(it => it.action.key);
}

function goToArticle(key){
  playConfirm();
  stack[stack.length - 1] = {kind:'article', key};
  hlIndex = 0;
  render();
}

function renderArticle(art, key){
  const extra = document.createElement('div');
  art.blocks.forEach(block => extra.appendChild(renderBlock(block)));

  const order = articleOrder();
  const idx = order.indexOf(key);
  const navButtons = [];
  if (idx > 0){
    navButtons.push({label: '‹ ARTICLE PRÉCÉDENT', handler: () => goToArticle(order[idx - 1])});
  }
  if (idx !== -1 && idx < order.length - 1){
    navButtons.push({label: 'ARTICLE SUIVANT ›', handler: () => goToArticle(order[idx + 1])});
  }

  renderLeaf(art.path, null, extra, navButtons);
}

function setHighlight(i, silent){
  hlIndex = i;
  document.querySelectorAll('.menu-item, .retour, .art-nav-btn').forEach(el => el.classList.remove('hl'));
  const el = document.getElementById('sel-' + hlIndex);
  if (el) el.classList.add('hl');
  if (!silent) playMove();
}

function selectItem(i){
  const leafActive = topScreen().kind !== 'menu';
  const menuEntry = activeMenuEntry();
  const offset = stack.length > 1 ? 1 : 0;
  if (offset && i === 0){ pop(); return; }
  const it = nodes[menuEntry.key].items[i - offset];

  if (it.action.type === 'stub'){
    flashPress(i);
    playDeny();
    const m = document.getElementById('stub-msg');
    if (m){ m.textContent = it.action.msg; m.style.display = 'block'; }
    return;
  }

  if (it.action.type === 'link'){
    flashPress(i);
    playConfirm();
    window.open(it.action.url, '_blank');
    return;
  }

  const entry = {kind: it.action.type, key: it.action.key};
  playConfirm();
  if (leafActive){
    // un détail est déjà affiché (colonne de droite) : on le remplace directement
    stack[stack.length - 1] = entry;
    hlIndex = 0;
    render();
  } else {
    flashPress(i);
    setTimeout(() => push(entry), 110);
  }
}

function flashPress(i){
  const el = document.getElementById('sel-' + i);
  if (!el) return;
  el.classList.add('pressed');
  setTimeout(() => el.classList.remove('pressed'), 120);
}

document.addEventListener('keydown', e => {
  if (!document.getElementById('layout').classList.contains('visible')) return;
  if (e.key === 'ArrowDown'){ setHighlight(Math.min(selectableCount - 1, hlIndex + 1)); e.preventDefault(); }
  else if (e.key === 'ArrowUp'){ setHighlight(Math.max(0, hlIndex - 1)); e.preventDefault(); }
  else if (e.key === 'Enter'){
    const s = topScreen();
    if (s.kind === 'menu') selectItem(hlIndex);
    else if (leafActions[hlIndex]) leafActions[hlIndex]();
  }
});

function boot(){
  const seq = [
    ['KNOX-CO SALVAGE OS — v0.9', 'b-title', 160],
    ['Vérification du disque... OK', 'b-out', 260],
    ['Secteurs endommagés : 3 (ignorés)', 'b-out', 320],
    ['Chargement du système de fichiers...', 'b-out', 240],
    ['Session trouvée : "E.KESSLER" — dernier accès : jour 10', 'b-out', 460],
    ['', 'b-out', 160],
    ['Bienvenue.', 'b-ok', 0],
  ];
  const bootEl = document.getElementById('boot');
  let i = 0;
  function step(){
    if (i >= seq.length){
      const cursor = document.createElement('span');
      cursor.className = 'boot-cursor';
      bootEl.appendChild(cursor);
      setTimeout(render, 550);
      return;
    }
    const div = document.createElement('div');
    div.className = seq[i][1];
    div.textContent = seq[i][0];
    bootEl.appendChild(div);
    const delay = seq[i][2];
    i++;
    setTimeout(step, delay);
  }
  step();
}
boot();
