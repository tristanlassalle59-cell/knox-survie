const articles = {
  bruit: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS/Le bruit te trahit',
    blocks: [
      {type:'tagline', text:'Ils ont de bonnes oreilles. Le silence est ta meilleure armure.'},
      {type:'bullets', items:[
        'Ne cours jamais sans raison en zone urbaine',
        'Referme systématiquement chaque porte derrière toi, même en fuite',
        'Coup de feu = horde ramenée depuis plusieurs rues → dernier recours, issue de secours repérée à l’avance',
        'Moteur de véhicule = rayon sonore encore plus large → ne jamais se garer devant la base',
      ]},
      {type:'figure', caption:'Portée sonore selon l’action', svg:`<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
  <circle cx="320" cy="220" r="190" fill="none" stroke="#ffb02e" stroke-width="1.4" stroke-opacity="0.9" stroke-dasharray="3 5"/>
  <circle cx="320" cy="220" r="140" fill="none" stroke="#ffb02e" stroke-width="1.4" stroke-opacity="0.75" stroke-dasharray="3 5"/>
  <circle cx="320" cy="220" r="90"  fill="none" stroke="#ffb02e" stroke-width="1.6" stroke-opacity="0.9"/>
  <circle cx="320" cy="220" r="42"  fill="none" stroke="#ffb02e" stroke-width="1.8"/>
  <circle cx="320" cy="220" r="4.5" fill="#ffb02e"/>
  <text x="320" y="203" text-anchor="middle" font-family="monospace" font-size="11" fill="#c9d1b8">accroupi</text>
  <text x="320" y="145" text-anchor="middle" font-family="monospace" font-size="11" fill="#c9d1b8">marche</text>
  <text x="320" y="100" text-anchor="middle" font-family="monospace" font-size="11" fill="#c9d1b8">course</text>
  <text x="320" y="18"  text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#ff6a4d">coup de feu / moteur</text>
</svg>`},
      {type:'callout', label:'RÈGLE D’OR', text:'Un coup de feu ou une course en ville sans plan reste le moyen le plus fiable de mourir. Tout le reste du manuel découle de ce principe.'}
    ]
  },
  sante: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS/Santé & système médical',
    blocks: [
      {type:'tagline', text:'Ton corps est ton dernier outil.'},
      {type:'bullets', items:[
        'Toute blessure non traitée s’aggrave : infection, boiterie, fièvre',
        'Garde toujours sur toi : bandages, désinfectant, antidouleurs',
        'Morsure de zombie = presque toujours fatale à terme',
        'Griffure ou coup normal = ne contamine pas, mais s’infecte si non désinfecté',
        'Vérifie ton corps après chaque affrontement, sans exception',
        'Fracture → attelle ou plâtre + repos strict, aucun effort intense pendant la convalescence',
        'Surveille aussi le moral : peur, solitude et désespoir altèrent le jugement',
      ]},
      {type:'figure', caption:'Arbre de décision — quoi faire selon ce que tu as', svg:`<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
  <rect x="200" y="16" width="240" height="42" fill="none" stroke="#ffb02e" stroke-width="1.6"/>
  <text x="320" y="42" text-anchor="middle" font-family="monospace" font-size="11" fill="#c9d1b8">BLESSURE VISIBLE ?</text>

  <line x1="320" y1="58" x2="320" y2="80" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="150" y1="80" x2="490" y2="80" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="150" y1="80" x2="150" y2="100" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="490" y1="80" x2="490" y2="138" stroke="#ffb02e" stroke-width="1.4" stroke-dasharray="3 5"/>
  <text x="150" y="74" text-anchor="middle" font-family="monospace" font-size="10" fill="#c9d1b8">oui</text>
  <text x="490" y="74" text-anchor="middle" font-family="monospace" font-size="10" fill="#c9d1b8">non</text>

  <line x1="150" y1="100" x2="150" y2="118" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="90" y1="118" x2="250" y2="118" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="90" y1="118" x2="90" y2="138" stroke="#ffb02e" stroke-width="1.4"/>
  <line x1="250" y1="118" x2="250" y2="138" stroke="#ffb02e" stroke-width="1.4"/>

  <rect x="20" y="138" width="140" height="72" fill="none" stroke="#ff6a4d" stroke-width="1.8"/>
  <text x="90" y="165" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#ff6a4d">MORSURE</text>
  <text x="90" y="185" text-anchor="middle" font-family="monospace" font-size="10" fill="#c9d1b8">quasi toujours</text>
  <text x="90" y="199" text-anchor="middle" font-family="monospace" font-size="10" fill="#c9d1b8">fatale</text>

  <rect x="180" y="138" width="140" height="72" fill="none" stroke="#ffb02e" stroke-width="1.6"/>
  <text x="250" y="165" text-anchor="middle" font-family="monospace" font-size="11" fill="#ffb02e">GRIFFURE / COUPURE</text>
  <text x="250" y="185" text-anchor="middle" font-family="monospace" font-size="10" fill="#c9d1b8">traitable si</text>
  <text x="250" y="199" text-anchor="middle" font-family="monospace" font-size="10" fill="#c9d1b8">désinfecté</text>

  <rect x="420" y="138" width="140" height="72" fill="none" stroke="#ffb02e" stroke-width="1.4" stroke-dasharray="3 5"/>
  <text x="490" y="165" text-anchor="middle" font-family="monospace" font-size="11" fill="#ffb02e">MALADIE</text>
  <text x="490" y="185" text-anchor="middle" font-family="monospace" font-size="10" fill="#c9d1b8">cause à</text>
  <text x="490" y="199" text-anchor="middle" font-family="monospace" font-size="10" fill="#c9d1b8">identifier</text>
</svg>`},
      {type:'subtitle', text:'Premiers secours de base'},
      {type:'bullets', items:[
        'Bandez toute plaie qui saigne en priorité',
        'Attelle pour une fracture',
        'Anti-douleur pour limiter les pénalités de combat et de sommeil — ça n’accélère pas la guérison',
      ]},
      {type:'subtitle', text:'Dépression'},
      {type:'paragraph', text:'Sortir, lire, manger des aliments plaisir, antidépresseurs si tu en as : l’effet est graduel, jamais instantané. Combine plusieurs leviers plutôt que d’attendre qu’un seul fasse tout le travail.'},
    ]
  },
  fatigue: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS/Fatigue & sommeil',
    blocks: [
      {type:'tagline', text:'Un corps épuisé est un corps mort.'},
      {type:'bullets', items:[
        'Ne jamais dormir dehors ou dans un lieu non sécurisé',
        'Barricade avant de fermer les yeux',
        'Faim, soif et moral bas amplifient chaque effet de la fatigue',
        'Un perso non reposé perd endurance, précision et jugement — et peut s’endormir de force au pire moment',
      ]}
    ]
  },
  combat: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS/Combat & tactique',
    blocks: [
      {type:'tagline', text:'Un mort-vivant se gère. Une horde se fuit.'},
      {type:'bullets', items:[
        'Ne jamais se faire encercler → reculer vers un couloir ou une porte pour ne gérer qu’un ou deux assaillants à la fois',
        'Viser la tête une fois compétence et endurance suffisantes',
        'Surveiller l’endurance en permanence — attrapé à bout de souffle = contamination facile',
        'Armes à feu = urgence uniquement, jamais premier réflexe',
      ]},
      {type:'figure', caption:'Terrain ouvert (à éviter) vs goulot d’étranglement (à chercher)', svg:`<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
  <line x1="320" y1="20" x2="320" y2="400" stroke="#ffb02e" stroke-width="1.2" stroke-opacity="0.4" stroke-dasharray="3 5"/>

  <text x="160" y="35" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#ff6a4d">TERRAIN OUVERT</text>
  <circle cx="160" cy="230" r="5" fill="#ffb02e"/>
  <circle cx="160" cy="145" r="8" fill="none" stroke="#ff6a4d" stroke-width="1.4"/>
  <circle cx="234" cy="188" r="8" fill="none" stroke="#ff6a4d" stroke-width="1.4"/>
  <circle cx="234" cy="273" r="8" fill="none" stroke="#ff6a4d" stroke-width="1.4"/>
  <circle cx="160" cy="315" r="8" fill="none" stroke="#ff6a4d" stroke-width="1.4"/>
  <circle cx="86"  cy="273" r="8" fill="none" stroke="#ff6a4d" stroke-width="1.4"/>
  <circle cx="86"  cy="188" r="8" fill="none" stroke="#ff6a4d" stroke-width="1.4"/>
  <text x="160" y="368" text-anchor="middle" font-family="monospace" font-size="10" fill="#ff6a4d">encerclé de tous côtés</text>

  <text x="480" y="35" text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#ffb02e">GOULOT D’ÉTRANGLEMENT</text>
  <line x1="440" y1="205" x2="620" y2="205" stroke="#ffb02e" stroke-width="1.8"/>
  <line x1="440" y1="255" x2="620" y2="255" stroke="#ffb02e" stroke-width="1.8"/>
  <circle cx="590" cy="230" r="5" fill="#ffb02e"/>
  <circle cx="500" cy="230" r="7" fill="none" stroke="#ffb02e" stroke-width="1.4"/>
  <circle cx="430" cy="230" r="7" fill="none" stroke="#ffb02e" stroke-width="1.4"/>
  <circle cx="390" cy="230" r="7" fill="none" stroke="#ffb02e" stroke-width="1.4"/>
  <text x="555" y="195" text-anchor="middle" font-family="monospace" font-size="10" fill="#ffb02e">1-2 à la fois</text>
  <text x="480" y="368" text-anchor="middle" font-family="monospace" font-size="10" fill="#ffb02e">un ou deux à la fois</text>
</svg>`}
    ]
  },
  inventaire: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS/Gestion de l’inventaire',
    blocks: [
      {type:'tagline', text:'Le poids d’un sac fait la différence entre fuir et mourir.'},
      {type:'bullets', items:[
        'Priorité de chargement : arme → eau → nourriture → matériel médical → le reste en second voyage',
        'La surcharge coûte de l’endurance et de la vitesse',
        'Un perso surchargé rattrapé par une horde = mort quasi certaine',
      ]}
    ]
  },
  meteo: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS/Météo & saisons',
    blocks: [
      {type:'tagline', text:'Le froid ne fait pas de bruit, mais il tue aussi sûrement.'},
      {type:'bullets', items:[
        'Exposition prolongée au froid sans vêtements adaptés → hypothermie',
        'Stocker vêtements chauds et imperméables avant l’urgence',
        'Jours plus courts en hiver → moins de temps d’action utile par journée',
        'Cultures limitées à certaines périodes → constituer les réserves avant la morte-saison',
      ]}
    ]
  },
  cadavres: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS/Gestion des cadavres',
    blocks: [
      {type:'tagline', text:'Ce que tu abats aujourd’hui te suit demain si tu l’oublies.'},
      {type:'bullets', items:[
        'Les corps qui s’accumulent près du camp attirent les mouches, dégagent une odeur et deviennent un risque sanitaire',
        'Brûler ou éloigner régulièrement plutôt que laisser s’entasser',
        'Un camp propre est un camp qui passe inaperçu',
      ]}
    ]
  },
  erreurs: {
    path: '/KNOX_SURVIE/01_PREMIERS_JOURS/Erreurs qui coûtent cher',
    blocks: [
      {type:'tagline', text:'Le récapitulatif à connaître par cœur.'},
      {type:'bullets', items:[
        'Courir en ville sans raison',
        'Explorer seul, loin de tout appui, sans plan de repli',
        'Stocker toutes les ressources critiques au même endroit',
        'Négliger le sommeil et le moral',
        'Ignorer une blessure mineure',
        'Se garer bruyamment devant sa base',
        'Partir en expédition risquée le sac trop chargé',
      ]},
      {type:'callout', label:'AVANT CHAQUE SORTIE', text:'Sac allégé · endurance pleine · trousse médicale complète · itinéraire de repli connu du groupe.'},
      {type:'paragraph', text:'Tenir ces premiers jours ne suffira pas longtemps sans un endroit fixe où poser tout ça.'},
    ]
  },
};
