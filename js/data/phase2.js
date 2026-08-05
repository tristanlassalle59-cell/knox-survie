Object.assign(articles, {
  base: {
    path: '/KNOX_SURVIE/02_S_INSTALLER/Choisir & sécuriser sa base',
    blocks: [
      {type:'tagline', text:'Une base mal choisie est un piège qu’on se pose à soi-même.'},
      {type:'subtitle', text:'Critères d’un bon abri'},
      {type:'cards', items:[
        {title:'Accès unique', text:'Un seul point d’entrée à surveiller vaut mieux que quatre portes ouvertes.'},
        {title:'Hauteur', text:'Étage ou toit accessible : observation, fuite, position défensive.'},
        {title:'Ressources proches', text:'Eau et terrain cultivable à distance de marche raisonnable.'},
        {title:'Sous-sol', text:'Stockage discret, refuge, parfois butin rare. Avantage net.'},
      ]},
      {type:'subtitle', text:'Sécurisation'},
      {type:'bullets', items:[
        'Barricade les fenêtres du rez-de-chaussée en priorité',
        'Bloque ou détruis les accès extérieurs superflus',
        'Verrouille systématiquement, chaque nuit',
        'Clôture périphérique = protège camp, cultures et bêtes d’un seul geste',
      ]},
      {type:'figure', caption:'1 Accès unique · 2 Fenêtres barricadées · 3 Étage / observation · 4 Clôture périphérique · 5 Sous-sol / stockage', svg:`<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
  <rect x="40" y="30" width="560" height="330" fill="none" stroke="#ffb02e" stroke-width="1.4" stroke-opacity="0.8" stroke-dasharray="3 5"/>
  <rect x="220" y="120" width="200" height="160" fill="none" stroke="#ffb02e" stroke-width="1.8"/>

  <line x1="214" y1="150" x2="226" y2="160" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="214" y1="170" x2="226" y2="180" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="414" y1="150" x2="426" y2="160" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="414" y1="170" x2="426" y2="180" stroke="#ffb02e" stroke-width="1.4"/>

  <line x1="320" y1="280" x2="320" y2="300" stroke="#ffb02e" stroke-width="1.6"/>

  <circle cx="320" cy="308" r="9" fill="#ffb02e"/>
  <text x="320" y="312" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#11150f">1</text>

  <circle cx="196" cy="160" r="9" fill="#ffb02e"/>
  <text x="196" y="164" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#11150f">2</text>

  <circle cx="400" cy="138" r="9" fill="#ffb02e"/>
  <text x="400" y="142" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#11150f">3</text>

  <circle cx="58" cy="45" r="9" fill="#ffb02e"/>
  <text x="58" y="49" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#11150f">4</text>

  <circle cx="260" cy="225" r="9" fill="#ffb02e"/>
  <text x="260" y="229" text-anchor="middle" font-family="monospace" font-size="10" font-weight="bold" fill="#11150f">5</text>
</svg>`}
    ]
  },
  vehicules: {
    path: '/KNOX_SURVIE/02_S_INSTALLER/Véhicules',
    blocks: [
      {type:'tagline', text:'Un gain de vitesse qui se paie en attention.'},
      {type:'bullets', items:[
        'Gain de vitesse et de capacité de transport, mais bruit qui attire sur un large rayon',
        'Ne jamais se garer près de la base',
        'Surveiller carburant et état mécanique — réparations = pièces + compétence mécanique',
        'Une voiture qui cale en pleine fuite devient un piège mortel',
      ]},
      {type:'subtitle', text:'Entretien & mécanique'},
      {type:'bullets', items:[
        'Entretien régulier (huile, pièces) pour éviter la panne loin de la base',
        'Toujours vérifier l’état général avant de partir en expédition en véhicule',
      ]},
      {type:'callout', label:'Jalon à viser tôt', text:'Une bonne maîtrise de la mécanique combinée à des notions d’électricité permet de démarrer un moteur sans clé — un bon objectif si tu comptes sur les véhicules.'},
    ]
  },
  groupe: {
    path: '/KNOX_SURVIE/02_S_INSTALLER/Vivre en groupe',
    blocks: [
      {type:'tagline', text:'Seul on meurt vite, à plusieurs on meurt moins bêtement.'},
      {type:'bullets', items:[
        'La confiance se construit avant la crise, jamais pendant — c’est là que se choisissent les gens qu’on garde',
        'Une consigne mal expliquée en pleine urgence coûte plus cher qu’une mauvaise idée bien comprise de tous',
        'Le moral s’effondre en cascade : un membre qui craque en entraîne d’autres — s’en occuper tout de suite plutôt que de l’ignorer',
        'Un point de repli connu de tout le monde, pas seulement de celui qui a eu l’idée',
      ]}
    ]
  },
  role: {
    path: '/KNOX_SURVIE/02_S_INSTALLER/À chacun son rôle',
    blocks: [
      {type:'tagline', text:'Personne ne naît survivant, mais un groupe qui ne couvre pas tous les fronts ne survit pas longtemps non plus.'},
      {type:'bullets', items:[
        'Les compétences progressent par la pratique — plus un geste est répété, plus il devient fiable ; un manuel bien lu accélère la courbe',
        'Un passé professionnel laisse des réflexes utiles : un mécanicien, un infirmier, un fermier partent avec une longueur d’avance dans leur domaine',
        'Un groupe qui tient dans la durée couvre au minimum : sécurité et défense, construction, ravitaillement, soin. Le reste peut attendre une base stable',
        'Mieux vaut deux ou trois fonctions solidement tenues qu’une couverture large et fragile partout',
      ]}
    ]
  },
  difficulte: {
    path: '/KNOX_SURVIE/02_S_INSTALLER/Difficulté croissante',
    blocks: [
      {type:'tagline', text:'Le temps ne joue jamais pour toi.'},
      {type:'bullets', items:[
        'Le nombre de morts-vivants augmente avec le temps de jeu',
        'Le loot facile s’épuise dans les zones proches',
        'Anticiper la bascule vers l’autosuffisance avant qu’elle devienne une urgence',
      ]},
      {type:'paragraph', text:'Ce basculement, mieux vaut le choisir que le subir.'},
    ]
  },
});
