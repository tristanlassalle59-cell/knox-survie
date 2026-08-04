const nodes = {
  root: {
    path: '/KNOX_SURVIE',
    items: [
      {label:'LISEZ_MOI_DABORD.txt', tag:'[TXT]', action:{type:'file', key:'lisez_moi'}},
      {label:'01_PREMIERS_JOURS', tag:'[DIR]', action:{type:'menu', key:'premiers_jours'}},
      {label:'02_S_INSTALLER', tag:'[DIR]', action:{type:'menu', key:'s_installer'}},
      {label:'03_DURER', tag:'[DIR]', action:{type:'menu', key:'durer'}},
      {label:'PERSONNEL', tag:'[DIR]', action:{type:'menu', key:'personnel'}},
    ]
  },
  premiers_jours: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS',
    items: [
      {label:'Le bruit te trahit', tag:'[ART]', action:{type:'article', key:'bruit'}},
      {label:'Santé & système médical', tag:'[ART]', action:{type:'article', key:'sante'}},
      {label:'Fatigue & sommeil', tag:'[ART]', action:{type:'article', key:'fatigue'}},
      {label:'Combat & tactique', tag:'[ART]', action:{type:'article', key:'combat'}},
      {label:'Gestion de l’inventaire', tag:'[ART]', action:{type:'article', key:'inventaire'}},
      {label:'Météo & saisons', tag:'[ART]', action:{type:'article', key:'meteo'}},
      {label:'Gestion des cadavres', tag:'[ART]', action:{type:'article', key:'cadavres'}},
      {label:'Erreurs qui coûtent cher', tag:'[ART]', action:{type:'article', key:'erreurs'}},
    ]
  },
  s_installer: {
    path: '/KNOX_SURVIE/02_S_INSTALLER',
    items: [
      {label:'Choisir & sécuriser sa base', tag:'[ART]', action:{type:'article', key:'base'}},
      {label:'Véhicules', tag:'[ART]', action:{type:'article', key:'vehicules'}},
      {label:'Vivre en groupe', tag:'[ART]', action:{type:'article', key:'groupe'}},
      {label:'À chacun son rôle', tag:'[ART]', action:{type:'article', key:'role'}},
      {label:'Difficulté croissante', tag:'[ART]', action:{type:'article', key:'difficulte'}},
    ]
  },
  durer: {
    path: '/KNOX_SURVIE/03_DURER',
    items: [
      {label:'Eau, nourriture & élevage', tag:'[ART]', action:{type:'article', key:'eau'}},
      {label:'Chasse, piégeage & pêche', tag:'[ART]', action:{type:'article', key:'chasse'}},
      {label:'Agriculture', tag:'[ART]', action:{type:'article', key:'agriculture'}},
      {label:'Artisanat & autosuffisance', tag:'[ART]', action:{type:'article', key:'artisanat'}},
    ]
  },
  personnel: {
    path: '/KNOX_SURVIE/PERSONNEL',
    items: [
      {label:'journal.txt', tag:'[TXT]', action:{type:'file', key:'journal'}},
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
