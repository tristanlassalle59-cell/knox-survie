Object.assign(articles, {
  ref01: {
    path: '/KNOX_SURVIE/04_REFERENCE_TERRAIN/01 — Santé approfondie',
    blocks: [
      {type:'tagline', text:'Ton corps ne ment jamais, mais il ne dit pas toujours la vérité complète.'},
      {type:'paragraph', text:'La question qui compte avant toute autre : y a-t-il une blessure physique visible ? La réponse change tout ce qui suit.'},
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
  ref02: {
    path: '/KNOX_SURVIE/04_REFERENCE_TERRAIN/02 — Artisanat : les 12 filières en détail',
    blocks: [
      {type:'tagline', text:'Douze métiers. Un seul mort qui recommence si tu te précipites.'},
      {type:'subtitle', text:'Immédiat'},
      {type:'bullets', items:[
        'Cuisine — transforme ce qu’on récupère en repas qui nourrissent mieux et se conservent',
        'Taille de silex — outils rudimentaires si tu manques d’outils métalliques',
      ]},
      {type:'subtitle', text:'Semaine 1'},
      {type:'bullets', items:[
        'Menuiserie — le socle : barricades, meubles, coffres. Scier des bûches fait progresser plus vite que démonter du bois déjà taillé',
        'Couture — répare et renforce les vêtements, isolation contre le froid',
        'Mécanique — entretien des véhicules ; combinée à un peu d’électricité, elle permet de démarrer un moteur sans clé',
        'Soudure — découpe et assemble le métal, indépendante de la forge ; les épaves de voiture sont les plus efficaces pour progresser',
      ]},
      {type:'subtitle', text:'Base stable'},
      {type:'bullets', items:[
        'Maçonnerie — structures en pierre, prérequis pour d’autres ateliers',
        'Sculpture — outils de précision utilisés par d’autres filières',
        'Électricité — générateurs, éclairage indépendant du réseau',
        'Forge et métallurgie — four, forge, charbon, coulée d’enclume, soufflet : prépare toute la logistique avant de commencer',
      ]},
      {type:'subtitle', text:'Niche'},
      {type:'bullets', items:[
        'Poterie — creusets et contenants en céramique, en soutien de la forge',
        'Verrerie — bocaux et contenants en verre, utile pour une conservation poussée',
      ]},
    ]
  },
  ref03: {
    path: '/KNOX_SURVIE/04_REFERENCE_TERRAIN/03 — Chasse, piégeage & pêche',
    blocks: [
      {type:'tagline', text:'La ville nourrit vite. La nature nourrit longtemps.'},
      {type:'subtitle', text:'Pièges'},
      {type:'bullets', items:[
        'Piège à souris : à la portée de tous, aucune expérience requise',
        'Pour des pièges plus solides, il faut apprendre — un manuel trouvé sur le terrain ou de l’expérience de chasseur aident',
        'Appâts frais obligatoires selon l’animal visé',
        'La zone du piège doit être vide de toute présence pour que la capture se déclenche — s’éloigner après l’avoir posé',
      ]},
      {type:'subtitle', text:'Chasse active & pêche'},
      {type:'bullets', items:[
        'Traces de pas et excréments permettent de traquer du gibier plus gros',
        'La pêche n’a d’intérêt que si la base est près d’un point d’eau, sinon l’ignorer complètement',
      ]},
    ]
  },
  ref04: {
    path: '/KNOX_SURVIE/04_REFERENCE_TERRAIN/04 — Élevage',
    blocks: [
      {type:'tagline', text:'Un animal négligé ne pardonne pas, il dépérit en silence.'},
      {type:'bullets', items:[
        'Enclos, mangeoires et source d’eau sont indispensables pour délimiter une zone d’élevage',
        'Fermer le poulailler chaque soir — un renard peut voler ou tuer des poules la nuit sinon',
        'Ne jamais courir ni traîner de zombies près des animaux — le stress affecte leur production',
      ]},
      {type:'subtitle', text:'Produits'},
      {type:'cards', items:[
        {title:'Lait', text:'Vaches et moutons, quelques jours après la gestation. Le petit doit rester avec sa mère.'},
        {title:'Laine', text:'Cisailles sur un mouton — garde l’outil sur toi.'},
        {title:'Œufs', text:'Collecte directe dans un poulailler sécurisé.'},
      ]},
    ]
  },
  ref05: {
    path: '/KNOX_SURVIE/04_REFERENCE_TERRAIN/05 — Agriculture',
    blocks: [
      {type:'tagline', text:'La terre a son calendrier. Elle ne négocie pas.'},
      {type:'paragraph', text:'J’ai appris à mes dépens qu’on ne plante pas n’importe quand : chaque culture a sa fenêtre selon la saison.'},
      {type:'subtitle', text:'Entretien'},
      {type:'bullets', items:[
        'Arroser régulièrement, tous les jours ou deux — la pluie y contribue aussi',
        'Les maladies (mildiou, pucerons...) apparaissent au hasard et empirent si on ne les traite pas',
        'Récolter de préférence au stade « en fleur » : meilleur rendement et récupération de graines',
      ]},
    ]
  },
  ref06: {
    path: '/KNOX_SURVIE/04_REFERENCE_TERRAIN/06 — Véhicules & mécanique',
    blocks: [
      {type:'tagline', text:'Une voiture en panne loin de la base est un cercueil roulant.'},
      {type:'bullets', items:[
        'Entretien régulier (huile, pièces) pour éviter la panne loin de la base',
        'Toujours vérifier l’état général avant de partir en expédition en véhicule',
      ]},
      {type:'callout', label:'Jalon à viser tôt', text:'Une bonne maîtrise de la mécanique combinée à des notions d’électricité permet de démarrer un moteur sans clé — un bon objectif si tu comptes sur les véhicules.'},
    ]
  },
});
