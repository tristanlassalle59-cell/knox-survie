const nodes = {
  root: {
    path: '/KNOX_SURVIE',
    items: [
      {label:'LISEZ_MOI_DABORD.txt', tag:'[TXT]', action:{type:'file', key:'lisez_moi'}},
      {label:'01_MANUELS', tag:'[DIR]', action:{type:'menu', key:'manuels'}},
      {label:'02_ROLES_ET_COMPETENCES', tag:'[DIR]', action:{type:'stub', msg:'MODULE EN CONSTRUCTION.'}},
      {label:'03_OUTILS', tag:'[DIR]', action:{type:'stub', msg:'MODULE EN CONSTRUCTION.'}},
      {label:'04_REFERENCE_TERRAIN', tag:'[DIR]', action:{type:'stub', msg:'MODULE EN CONSTRUCTION.'}},
      {label:'PERSONNEL', tag:'[DIR]', action:{type:'menu', key:'personnel'}},
    ]
  },
  personnel: {
    path: '/KNOX_SURVIE/PERSONNEL',
    items: [
      {label:'journal.txt', tag:'[TXT]', action:{type:'file', key:'journal'}},
    ]
  },
  manuels: {
    path: '/KNOX_SURVIE/01_MANUELS',
    items: [
      {label:'01 — Le bruit te trahit', tag:'[ART]', action:{type:'article', key:'art01'}},
      {label:'02 — Santé & système médical', tag:'[ART]', action:{type:'article', key:'art02'}},
      {label:'03 — Fatigue & sommeil', tag:'[ART]', action:{type:'article', key:'art03'}},
      {label:'04 — Choisir & sécuriser sa base', tag:'[ART]', action:{type:'article', key:'art04'}},
      {label:'05 — Eau, nourriture & élevage', tag:'[ART]', action:{type:'article', key:'art05'}},
      {label:'06 — Combat & tactique', tag:'[ART]', action:{type:'article', key:'art06'}},
      {label:'07 — Météo & saisons', tag:'[ART]', action:{type:'article', key:'art07'}},
      {label:'08 — Gestion de l’inventaire', tag:'[ART]', action:{type:'article', key:'art08'}},
      {label:'09 — Véhicules', tag:'[ART]', action:{type:'article', key:'art09'}},
      {label:'10 — Compétences & traits', tag:'[ART]', action:{type:'article', key:'art10'}},
      {label:'11 — Artisanat & autosuffisance', tag:'[ART]', action:{type:'article', key:'art11'}},
      {label:'12 — Gestion des cadavres', tag:'[ART]', action:{type:'article', key:'art12'}},
      {label:'13 — Difficulté croissante', tag:'[ART]', action:{type:'article', key:'art13'}},
      {label:'14 — Spécificités multijoueur', tag:'[ART]', action:{type:'article', key:'art14'}},
      {label:'15 — Erreurs qui coûtent cher', tag:'[ART]', action:{type:'article', key:'art15'}},
    ]
  },
};

const files = {
  lisez_moi: {
    path: '/KNOX_SURVIE/LISEZ_MOI_DABORD.txt',
    content: `Si tu lis ça, soit c'est toi qui as remonté ce disque d'une sacoche
paumée, soit j'y suis resté et quelqu'un d'autre farfouille mes affaires.
Dans les deux cas : tout ce dont j'ai eu besoin pour tenir est rangé
ici, classé comme j'aurais aimé le trouver moi-même en arrivant.

Commence par les manuels si t'es nouveau. Le reste, c'est pour
construire une vraie base une fois que t'as compris les bases.

— E.K.`
  },
  journal: {
    path: '/KNOX_SURVIE/PERSONNEL/journal.txt',
    content: `Jour 3 — J'avais accès à des trucs que j'aurais pas dû avoir — un vieux
accès à un réseau militaire, jamais fermé proprement. J'ai vu passer des
rapports qui parlaient déjà de "confinement" trois jours avant que ça
sorte aux infos. Je n'écrirai pas comment j'y suis entré. Trois jours
d'avance, j'en ai profité.

Jour 12 — Trouvé une pelle correcte au garage de la 4e rue. Toujours
pas de nouvelles de R.

Jour 24 — Le poulailler tient. Le renard est revenu deux fois, j'ai
refermé la porte trois fois plus solidement.

Jour 40 — Rien à signaler. C'est déjà beaucoup.

Jour 44 — Quelqu'un est passé près de la clôture cette nuit. Pas un
rôdeur — la démarche était trop réglée, trop silencieuse. J'ai planqué
le disque plus profond que d'habitude.`
  }
};
