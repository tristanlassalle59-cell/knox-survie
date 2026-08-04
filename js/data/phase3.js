Object.assign(articles, {
  eau: {
    path: '/KNOX_SURVIE/03_DURER/Eau, nourriture & élevage',
    blocks: [
      {type:'tagline', text:'L’eau, la terre, les bêtes. Rien d’autre ne durera.'},
      {type:'bullets', items:[
        'Eau — bacs et fûts pour la pluie ; faire bouillir toute eau douteuse',
        'Culture — potager tôt, graines en jardinerie / supermarché / jardins abandonnés, respecter les saisons, désherber régulièrement',
        'Élevage — poules (œufs, entretien simple) ; vaches et moutons (lait, viande, cuir, mais enclos solide et ravitaillement constant)',
        'Conservation — séchoir, mise en conserve, fumage : indispensable une fois l’électricité coupée pour de bon',
      ]},
      {type:'subtitle', text:'Élevage en détail'},
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
  chasse: {
    path: '/KNOX_SURVIE/03_DURER/Chasse, piégeage & pêche',
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
  agriculture: {
    path: '/KNOX_SURVIE/03_DURER/Agriculture',
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
  artisanat: {
    path: '/KNOX_SURVIE/03_DURER/Artisanat & autosuffisance',
    blocks: [
      {type:'tagline', text:'L’autosuffisance n’est pas un choix, c’est une échéance.'},
      {type:'bullets', items:[
        'Progression : bricolage de fortune → autonomie complète',
        'Forge, poterie, travail de la pierre = indépendance vis-à-vis du pillage, mais long à monter → démarrer tôt',
        'Menuiserie = socle immédiat (barricades, meubles, stockage), progresse plus vite',
      ]},
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
});
