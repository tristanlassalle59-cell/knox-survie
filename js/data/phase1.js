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
      ]}
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
