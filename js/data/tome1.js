const articles = {
  art01: {
    path: '/KNOX_SURVIE/01_MANUELS/01 — Le bruit te trahit',
    blocks: [
      {type:'tagline', text:'Ils ont de bonnes oreilles. Le silence est ta meilleure armure.'},
      {type:'bullets', items:[
        'Ne cours jamais sans raison en zone urbaine',
        'Referme systématiquement chaque porte derrière toi, même en fuite',
        'Coup de feu = horde ramenée depuis plusieurs rues → dernier recours, issue de secours repérée à l’avance',
        'Moteur de véhicule = rayon sonore encore plus large → ne jamais se garer devant la base',
      ]},
      {type:'callout', label:'RÈGLE D’OR', text:'Un coup de feu ou une course en ville sans plan reste le moyen le plus fiable de mourir. Tout le reste du manuel découle de ce principe.'}
    ]
  },
  art02: {
    path: '/KNOX_SURVIE/01_MANUELS/02 — Santé & système médical',
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
      ]}
    ]
  },
  art03: {
    path: '/KNOX_SURVIE/01_MANUELS/03 — Fatigue & sommeil',
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
  art04: {
    path: '/KNOX_SURVIE/01_MANUELS/04 — Choisir & sécuriser sa base',
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
      ]}
    ]
  },
  art05: {
    path: '/KNOX_SURVIE/01_MANUELS/05 — Eau, nourriture & élevage',
    blocks: [
      {type:'tagline', text:'L’eau, la terre, les bêtes. Rien d’autre ne durera.'},
      {type:'bullets', items:[
        'Eau — bacs et fûts pour la pluie ; faire bouillir toute eau douteuse',
        'Culture — potager tôt, graines en jardinerie / supermarché / jardins abandonnés, respecter les saisons, désherber régulièrement',
        'Élevage — poules (œufs, entretien simple) ; vaches et moutons (lait, viande, cuir, mais enclos solide et ravitaillement constant)',
        'Conservation — séchoir, mise en conserve, fumage : indispensable une fois l’électricité coupée pour de bon',
      ]}
    ]
  },
  art06: {
    path: '/KNOX_SURVIE/01_MANUELS/06 — Combat & tactique',
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
  art07: {
    path: '/KNOX_SURVIE/01_MANUELS/07 — Météo & saisons',
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
  art08: {
    path: '/KNOX_SURVIE/01_MANUELS/08 — Gestion de l’inventaire',
    blocks: [
      {type:'tagline', text:'Le poids d’un sac fait la différence entre fuir et mourir.'},
      {type:'bullets', items:[
        'Priorité de chargement : arme → eau → nourriture → matériel médical → le reste en second voyage',
        'La surcharge coûte de l’endurance et de la vitesse',
        'Un perso surchargé rattrapé par une horde = mort quasi certaine',
      ]}
    ]
  },
  art09: {
    path: '/KNOX_SURVIE/01_MANUELS/09 — Véhicules',
    blocks: [
      {type:'tagline', text:'Un gain de vitesse qui se paie en attention.'},
      {type:'bullets', items:[
        'Gain de vitesse et de capacité de transport, mais bruit qui attire sur un large rayon',
        'Ne jamais se garer près de la base',
        'Surveiller carburant et état mécanique — réparations = pièces + compétence mécanique',
        'Une voiture qui cale en pleine fuite devient un piège mortel',
      ]}
    ]
  },
  art10: {
    path: '/KNOX_SURVIE/01_MANUELS/10 — Compétences & traits',
    blocks: [
      {type:'tagline', text:'Personne ne naît survivant.'},
      {type:'bullets', items:[
        'Les compétences progressent par la pratique, accélérées par les livres de compétence',
        'Les traits choisis à la création orientent durablement la progression → les choisir selon le rôle prévu dans le groupe, pas au hasard',
        'L’occupation de départ (fermier, mécanicien, infirmier…) donne des bonus cohérents avec un rôle',
      ]}
    ]
  },
  art11: {
    path: '/KNOX_SURVIE/01_MANUELS/11 — Artisanat & autosuffisance',
    blocks: [
      {type:'tagline', text:'L’autosuffisance n’est pas un choix, c’est une échéance.'},
      {type:'bullets', items:[
        'Progression : bricolage de fortune → autonomie complète',
        'Forge, poterie, travail de la pierre = indépendance vis-à-vis du pillage, mais long à monter → démarrer tôt',
        'Menuiserie = socle immédiat (barricades, meubles, stockage), progresse plus vite',
      ]}
    ]
  },
  art12: {
    path: '/KNOX_SURVIE/01_MANUELS/12 — Gestion des cadavres',
    blocks: [
      {type:'tagline', text:'Ce que tu abats aujourd’hui te suit demain si tu l’oublies.'},
      {type:'bullets', items:[
        'Les corps qui s’accumulent près du camp attirent les mouches, dégagent une odeur et deviennent un risque sanitaire',
        'Brûler ou éloigner régulièrement plutôt que laisser s’entasser',
        'Un camp propre est un camp qui passe inaperçu',
      ]}
    ]
  },
  art13: {
    path: '/KNOX_SURVIE/01_MANUELS/13 — Difficulté croissante',
    blocks: [
      {type:'tagline', text:'Le temps ne joue jamais pour toi.'},
      {type:'bullets', items:[
        'Le nombre de morts-vivants augmente avec le temps de jeu',
        'Le loot facile s’épuise dans les zones proches',
        'Anticiper la bascule vers l’autosuffisance avant qu’elle devienne une urgence',
      ]}
    ]
  },
  art14: {
    path: '/KNOX_SURVIE/01_MANUELS/14 — Spécificités multijoueur',
    blocks: [
      {type:'tagline', text:'Seul on meurt vite, à plusieurs on meurt moins bêtement.'},
      {type:'bullets', items:[
        'Tout le groupe sur la même version exacte du jeu, sinon connexion impossible',
        'Sauvegarder régulièrement côté serveur, surtout avant toute mise à jour',
        'Bug de dépeçage, objet disparu ou dupliqué → une reconnexion règle généralement le problème',
        'Répartir les rôles selon la taille réelle du groupe — trois ou quatre piliers solides valent mieux que six rôles à moitié tenus',
      ]}
    ]
  },
  art15: {
    path: '/KNOX_SURVIE/01_MANUELS/15 — Erreurs qui coûtent cher',
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
      {type:'callout', label:'AVANT CHAQUE SORTIE', text:'Sac allégé · endurance pleine · trousse médicale complète · itinéraire de repli connu du groupe.'}
    ]
  }
};
