let stack = [{kind:'menu', key:'root'}];
let hlIndex = 0;
let selectableCount = 0;

function topScreen(){ return stack[stack.length - 1]; }

function push(entry){ stack.push(entry); hlIndex = 0; render(); }

function pop(){ if (stack.length > 1){ stack.pop(); hlIndex = 0; render(); } }

function activeMenuEntry(){
  const s = topScreen();
  return s.kind === 'menu' ? s : stack[stack.length - 2];
}

function render(){
  const s = topScreen();
  const leafActive = s.kind !== 'menu';

  renderMenuPane(activeMenuEntry(), !leafActive);

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

function renderMenuPane(entry, isActive){
  const node = nodes[entry.key];
  const pane = document.getElementById('pane-menu');
  pane.innerHTML = '';

  if (isActive){ document.getElementById('top-path').textContent = node.path; }

  const crumb = document.createElement('div');
  crumb.className = 'breadcrumb';
  crumb.textContent = node.path;
  pane.appendChild(crumb);

  if (stack.length > 1){
    const retour = document.createElement('div');
    retour.className = 'retour';
    if (isActive) retour.id = 'sel-0';
    retour.innerHTML = '&lt; RETOUR';
    if (isActive) retour.addEventListener('mouseenter', () => setHighlight(0));
    retour.addEventListener('click', pop);
    pane.appendChild(retour);
  }

  const ul = document.createElement('ul');
  ul.className = 'menu-list';
  const offset = stack.length > 1 ? 1 : 0;
  node.items.forEach((it, i) => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    if (isActive) li.id = 'sel-' + (i + offset);
    li.innerHTML = `<span class="tag">${it.tag}</span><span class="label">${it.label}</span><span class="arrow">&gt;</span>`;
    if (isActive) li.addEventListener('mouseenter', () => setHighlight(i + offset));
    li.addEventListener('click', () => selectItem(i + offset));
    ul.appendChild(li);
  });
  pane.appendChild(ul);

  const stubMsg = document.createElement('div');
  stubMsg.className = 'stub-msg';
  stubMsg.id = 'stub-msg';
  pane.appendChild(stubMsg);

  const hint = document.createElement('div');
  hint.className = 'hint';
  hint.innerHTML = '↑↓ pour naviguer · <b>Entrée</b> ou clic pour sélectionner';
  pane.appendChild(hint);

  if (isActive){
    selectableCount = node.items.length + offset;
    setHighlight(0);
  }
}

function renderDetailPlaceholder(){
  const pane = document.getElementById('pane-detail');
  pane.innerHTML = '';
  const msg = document.createElement('div');
  msg.className = 'detail-placeholder';
  msg.textContent = '// sélectionne un élément dans la liste';
  pane.appendChild(msg);
}

let leafActions = [];

function renderLeaf(path, textContent, extraNode, navButtons){
  const pane = document.getElementById('pane-detail');
  pane.innerHTML = '';
  document.getElementById('top-path').textContent = path;
  leafActions = [];

  const crumb = document.createElement('div');
  crumb.className = 'breadcrumb';
  crumb.textContent = path;
  pane.appendChild(crumb);

  const retour = document.createElement('div');
  retour.className = 'retour';
  retour.id = 'sel-0';
  retour.innerHTML = '&lt; RETOUR';
  retour.addEventListener('mouseenter', () => setHighlight(0));
  retour.addEventListener('click', pop);
  pane.appendChild(retour);
  leafActions.push(pop);

  if (extraNode){ pane.appendChild(extraNode); }

  if (textContent){
    const body = document.createElement('div');
    body.className = 'file-body';
    body.textContent = textContent;
    pane.appendChild(body);
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
    pane.appendChild(nav);
  }

  const hint = document.createElement('div');
  hint.className = 'hint';
  hint.innerHTML = '<b>Entrée</b> ou clic pour sélectionner';
  pane.appendChild(hint);

  selectableCount = leafActions.length;
  setHighlight(0);
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
  return document.createElement('div');
}

function articleOrder(){
  return nodes.manuels.items
    .filter(it => it.action && it.action.type === 'article')
    .map(it => it.action.key);
}

function goToArticle(key){
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

function setHighlight(i){
  hlIndex = i;
  document.querySelectorAll('.menu-item, .retour, .art-nav-btn').forEach(el => el.classList.remove('hl'));
  const el = document.getElementById('sel-' + hlIndex);
  if (el) el.classList.add('hl');
}

function selectItem(i){
  const leafActive = topScreen().kind !== 'menu';
  const menuEntry = activeMenuEntry();
  const offset = stack.length > 1 ? 1 : 0;
  if (offset && i === 0){ pop(); return; }
  const it = nodes[menuEntry.key].items[i - offset];

  if (it.action.type === 'stub'){
    flashPress(i);
    const m = document.getElementById('stub-msg');
    if (m){ m.textContent = it.action.msg; m.style.display = 'block'; }
    return;
  }

  const entry = {kind: it.action.type, key: it.action.key};
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
    ['KNOX-CO SALVAGE OS — v0.9', 'b-title'],
    ['Vérification du disque... OK', 'b-out'],
    ['Secteurs endommagés : 3 (ignorés)', 'b-out'],
    ['Chargement du système de fichiers...', 'b-out'],
    ['Session trouvée : "M.DELCOURT" — dernier accès : jour 47', 'b-out'],
    ['', 'b-out'],
    ['Bienvenue.', 'b-ok'],
  ];
  const bootEl = document.getElementById('boot');
  let i = 0;
  function step(){
    if (i >= seq.length){
      setTimeout(render, 300);
      return;
    }
    const div = document.createElement('div');
    div.className = seq[i][1];
    div.textContent = seq[i][0];
    bootEl.appendChild(div);
    i++;
    setTimeout(step, i < 3 ? 220 : 90);
  }
  step();
}
boot();
