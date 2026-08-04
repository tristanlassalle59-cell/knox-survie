const nodes = {
  root: {
    path: '/KNOX_SURVIE',
    items: [
      {label:'LISEZ_MOI_DABORD.txt', tag:'[TXT]', action:{type:'file', key:'lisez_moi'}},
      {label:'01_MANUELS', tag:'[DIR]', action:{type:'menu', key:'manuels'}},
      {label:'02_ROLES_ET_COMPETENCES', tag:'[DIR]', action:{type:'stub', msg:'MODULE EN CONSTRUCTION.'}},
      {label:'03_OUTILS', tag:'[DIR]', action:{type:'menu', key:'outils'}},
      {label:'04_REFERENCE_TERRAIN', tag:'[DIR]', action:{type:'menu', key:'reference_terrain'}},
      {label:'PERSONNEL', tag:'[DIR]', action:{type:'menu', key:'personnel'}},
    ]
  },
  personnel: {
    path: '/KNOX_SURVIE/PERSONNEL',
    items: [
      {label:'journal.txt', tag:'[TXT]', action:{type:'file', key:'journal'}},
    ]
  },
  outils: {
    path: '/KNOX_SURVIE/03_OUTILS',
    items: [
      {label:'explorateur_artisanat.html', tag:'[APP]', action:{type:'stub', msg:'MODULE EN CONSTRUCTION.'}},
    ]
  },
  reference_terrain: {
    path: '/KNOX_SURVIE/04_REFERENCE_TERRAIN',
    items: [
      {label:'01 — Santé approfondie', tag:'[ART]', action:{type:'article', key:'ref01'}},
      {label:'02 — Artisanat : les 12 filières', tag:'[ART]', action:{type:'article', key:'ref02'}},
      {label:'03 — Chasse, piégeage & pêche', tag:'[ART]', action:{type:'article', key:'ref03'}},
      {label:'04 — Élevage', tag:'[ART]', action:{type:'article', key:'ref04'}},
      {label:'05 — Agriculture', tag:'[ART]', action:{type:'article', key:'ref05'}},
      {label:'06 — Véhicules & mécanique', tag:'[ART]', action:{type:'article', key:'ref06'}},
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
    content: `Jour 1 — J'ai eu accès à des trucs que j'aurais pas dû voir — un vieux
réseau militaire, jamais fermé proprement. Ce que j'ai lu me fait
penser qu'un genre d'épidémie grave se prépare, et le gouvernement sait
déjà tout et y est certainement pour quelque chose.
Evidemment, personne n'est encore au courant. Dans le doute, je
commence à faire des réserves.

Jour 2 — C'est étrange de se préparer alors que tout le monde fait sa
vie tranquillement, j'espère pouvoir finir le guide à temps pour le
distribuer aux survivants.
PS : pas de nouvelles de R.

Jour 3 — Rien de neuf sur le réseau. Je sécurise le poulailler avant
que ça devienne urgent, si jamais j'ai raison. Je passe pour un fou
dans les magasins mais je ne peux rien dire de mon côté, ce serait
trop dangereux pour ma sécurité, déjà que je pense être surveillé.

Jour 4 — Ça y est ! J'en étais sûr, ils l'ont annoncé aux infos, ça
commence déjà à être un carnage.

Jour 5 — Je continue de me préparer, mais les militaires ont mis le
comté en quarantaine. Les routes principales sont bloquées.

Jour 6 — Le poulailler tient. Le renard est revenu deux fois cette
nuit, j'ai refermé la porte trois fois plus solidement.

Jour 7 — Je vois des horreurs, il faut que je sorte le moins possible,
c'est terrible.

Jour 8 — Quelqu'un est passé près de la clôture cette nuit. Pas un
rôdeur — la démarche était trop réglée, trop silencieuse. J'ai
planqué le disque plus profond que d'habitude.`
  }
};
