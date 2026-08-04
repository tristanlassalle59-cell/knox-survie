# Projet KNOX_SURVIE — PC de survivaliste retrouvé

## Concept
Un site/app qui simule l'ordinateur d'un survivaliste ("E.KESSLER") retrouvé
dans l'univers de Project Zomboid (Build 42.20). C'est un terminal fictif
contenant tout ce qu'il avait préparé pour survivre : manuels, outils,
références. Le joueur (l'utilisateur) explore ce disque comme s'il l'avait
vraiment trouvé.

**Ton du projet : c'est pour le kiff, un projet perso à partager avec un
groupe de potes qui joue à Project Zomboid ensemble. Pas un produit commercial.**

## Lore d'Earl Kessler (le survivaliste)

- Type ordinaire de Knox County, pas un super-soldat : manuellement compétent
  (mécanicien ou quincaillier), bricolait et chassait déjà avant l'effondrement.
- Peu bavard, direct, pas du genre à s'épancher. Il note des faits, jamais des
  sentiments. Le ton de tout ce qu'il écrit doit rester sec et pratique.
- Il n'a PAS organisé ce disque pour quelqu'un d'autre à l'origine — c'est son
  propre système, construit pour lui-même au fil des semaines. Le
  LISEZ_MOI_DABORD.txt n'est qu'un ajout tardif.
- Il avait un accès non-autorisé à un réseau militaire (jamais expliqué
  comment), ce qui lui a donné quelques jours d'avance sur l'effondrement
  officiel. C'est la vraie raison derrière "il avait tout prévu" — jamais à
  révéler plus que l'entrée du Jour 3 ne le fait.
- Le journal s'arrête au Jour 44 (présence suspecte près de la clôture). Le
  boot affiche "dernier accès : jour 47". Cet écart de 3 jours est
  VOLONTAIRE et ne doit JAMAIS être expliqué explicitement, nulle part. Ni
  mort confirmée, ni capture confirmée, ni départ confirmé — le flou fait
  partie du personnage, y compris dans de futurs easter eggs.
- Toute nouvelle feature doit se justifier par "Kessler l'a fait/laissé",
  jamais par "nous, le groupe, on l'ajoute".

### Règles strictes

- Ne jamais écrire d'entrée de journal après le Jour 44
- Ne jamais nommer l'armée précisément, ni détailler le type d'accès piraté
- Ne jamais confirmer ou infirmer explicitement une disparition, une capture
  ou une mort — même dans un futur easter egg, fichier caché, ou message
  système
- Ne jamais mentionner le groupe de potes ou l'utilisateur dans le contenu du
  disque — tout reste écrit du point de vue de Kessler

## Où en est le projet (état actuel)

Trois fichiers HTML autonomes ont été prototypés et validés un par un dans
Claude.ai (méthode "checkpoint" : chaque étape vérifiée avant de passer à la
suivante). Le dernier en date, `Terminal_Checkpoint3_Article1.html`, est LA
base à partir de laquelle continuer. Les deux précédents sont fournis pour
l'historique mais sont dépassés par le 3.

Un outil séparé déjà fonctionnel doit être intégré : `Configurateur_Guide_Knox_County.html`
(configurateur de survie : nombre de joueurs / niveau / difficulté → recommandations).
Il est déjà branché et fonctionnel dans une version antérieure du terminal
(`Terminal_KNOX_SURVIE.html`, la toute première version en ligne de commande —
dépassée niveau interaction, mais le code d'intégration de l'outil en iframe
srcdoc y est encore visible si besoin de référence).

## Direction artistique (validée, ne pas changer sans demander)

- **Palette** : phosphore ambre sur fond très sombre, PAS vert (une référence
  Fallout a été montrée pour l'esprit "menu", mais la couleur ambre du
  prototype existant a été explicitement confirmée à garder).
  - `--bg:#11150f` `--panel:#171d14` `--line:#3a4530`
  - `--amber:#ffb02e` `--amber-dim:#8a6a2e`
  - `--text:#c9d1b8` `--text-dim:#7d8870`
- **Polices** : Share Tech Mono (titres/boot), JetBrains Mono (corps)
- **Effet CRT** : scanlines fines en fond (repeating-linear-gradient), à garder
- Séquence de boot au chargement (vérification disque, session "E.KESSLER",
  jour 47) avant d'afficher le menu

## Modèle d'interaction (validé)

**Important : ce n'est PAS une ligne de commande.** Un essai précédent avec des
commandes tapées (`cd`, `ls`, `open`) a été explicitement rejeté par l'utilisateur —
il veut un **menu à sélectionner**, façon terminal de hacking Fallout :
- Liste d'entrées cliquables
- Survol = surbrillance (fond ambre, texte sombre)
- Navigation clavier en plus du clic : flèches haut/bas + Entrée
- Une entrée "< RETOUR" en haut de chaque écran (sauf à la racine) pour remonter d'un niveau

## Architecture technique actuelle

Système de navigation par **pile** (stack), déjà implémenté dans le checkpoint 3 :
- `stack` = tableau d'écrans empilés, chacun `{kind:'menu'|'file'|'article', key:'...'}`
- `push(entry)` avance, `pop()` (RETOUR) recule d'un cran
- Trois types de rendu : `renderMenu` (liste sélectionnable), `renderLeaf` (fichier
  texte simple), `renderArticle` (accroche + puces + encart façon "règle d'or")

**Recommandation pour la suite** : le fichier est un seul gros HTML pour l'instant
(CSS + données + logique tout inline). Pour porter 25 articles proprement, ça vaut
le coup de séparer en plusieurs fichiers (ex: `style.css`, `data/tome1.js`,
`data/tome2.js`, `app.js`, `index.html`) plutôt que de continuer à tout empiler
dans un seul fichier.

## Bugs déjà rencontrés et corrigés (à ne pas réintroduire)

1. **Apostrophes échappées en double backslash** (`\\'`) cassent les chaînes JS —
   toujours vérifier avec `node --check` après édition.
2. **Balise `</script>` imbriquée** : si on injecte le HTML d'un outil (comme le
   configurateur) comme chaîne dans un `<script>`, il faut échapper `</script`
   en `<\/script` dans la chaîne injectée, sinon le parseur HTML coupe le script
   en plein milieu.
3. **`function top()`** entre en conflit avec `window.top` (référence réservée
   du navigateur) — utiliser un autre nom (`topScreen()` par exemple).

## Arborescence prévue du "disque" (menu racine)

```
/KNOX_SURVIE/
├── LISEZ_MOI_DABORD.txt          [fait, contenu réel]
├── 01_MANUELS/                    [liste plate des articles, pas de sous-dossier par tome —
│                                    on ne présente plus le contenu comme des documents PDF
│                                    séparés, le terminal est le seul guide]
│   ├── 01 — Le bruit te trahit           [porté]
│   ├── 02 — Santé & système médical      [porté]
│   └── 03 à 15 (Tome 1)                  [stubs, pas encore portés]
├── 02_ROLES_ET_COMPETENCES/       [stub, pas construit]
├── 03_OUTILS/
│   ├── configurateur_survie.html [fonctionnel, à réintégrer]
│   └── explorateur_artisanat.html [stub, pas construit]
├── 04_REFERENCE_TERRAIN/          [stub, pas construit]
└── PERSONNEL/
    └── journal.txt                [fait, contenu réel, voir plus bas]
```

## Contenu déjà écrit (à réutiliser tel quel)

**LISEZ_MOI_DABORD.txt**
```
Si tu lis ça, soit c'est toi qui as remonté ce disque d'une sacoche
paumée, soit j'y suis resté et quelqu'un d'autre farfouille mes affaires.
Dans les deux cas : tout ce dont j'ai eu besoin pour tenir est rangé
ici, classé comme j'aurais aimé le trouver moi-même en arrivant.

Commence par les manuels si t'es nouveau. Le reste, c'est pour
construire une vraie base une fois que t'as compris les bases.

— E.K.
```

**PERSONNEL/journal.txt**
```
Jour 3 — J'avais accès à des trucs que j'aurais pas dû avoir — un vieux
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
le disque plus profond que d'habitude.
```
Le fichier s'arrête là. Rien après le Jour 44 — voir la section lore ci-dessous
pour pourquoi cet écart avec le "jour 47" du boot est volontaire et ne doit
jamais être expliqué.

**Les 15 titres du Tome 1** (dans l'ordre, du plus vital au moins critique) :
01 Le bruit te trahit *(déjà porté intégralement)* · 02 Santé & système médical ·
03 Fatigue & sommeil · 04 Choisir & sécuriser sa base · 05 Eau, nourriture & élevage ·
06 Combat & tactique · 07 Météo & saisons · 08 Gestion de l'inventaire · 09 Véhicules ·
10 Compétences & traits · 11 Artisanat & autosuffisance · 12 Gestion des cadavres ·
13 Difficulté croissante · 14 Spécificités multijoueur · 15 Erreurs qui coûtent cher

Le contenu complet de ces 15 articles existe déjà dans
`Sources/Manuel_Survie_Knox_County_Illustre.html` (converti depuis le PDF d'origine,
fourni dans ce dossier) — à extraire article par article plutôt qu'à réécrire.

Le Tome 2 (10 articles techniques : réglages, artisanat, chasse, élevage,
agriculture, véhicules, admin serveur) existe dans
`Sources/Manuel_Technique_Tome2_Illustre.html` (converti depuis le docx d'origine,
fourni dans ce dossier).

## Décisions actées (validées avec l'utilisateur — ne pas remettre en question)

### Hébergement : GitHub Pages
Le projet sera publié sur GitHub Pages pour que le groupe y accède par une simple
URL, sans téléchargement. Conséquence directe : **structurer en plusieurs fichiers**
dès le départ (pas un HTML monolithique), puisqu'il n'y a plus besoin de pouvoir
envoyer un fichier unique par Discord.

Structure de fichiers suggérée :
```
index.html
css/style.css
js/app.js          (moteur de navigation + rendu)
js/data/tome1.js   (les 15 articles)
js/data/tome2.js   (les 10 articles)
js/data/fs.js      (arborescence du disque)
tools/configurateur.html
```

### Responsive : deux colonnes sur grand écran, un panneau sur mobile
Les membres du groupe consulteront depuis leur téléphone **pendant qu'ils jouent**,
donc le layout doit fonctionner en portrait étroit — mais sur grand écran, l'interface
est en **deux colonnes façon terminal de hacking Fallout** : le menu reste visible et
cliquable en permanence à gauche (colonne fixe, `position:sticky`), le contenu
(article, fichier, outil) s'affiche à droite. Cliquer un autre élément du menu à
gauche remplace directement le contenu à droite, sans repasser par RETOUR.

Sous 760px de large : comportement mobile — un seul panneau visible à la fois (le
menu OU le contenu), qui se remplacent l'un l'autre comme avant. Au-dessus de 760px :
les deux panneaux sont visibles simultanément.

Implémenté dans `index.html` (deux divs `#pane-menu` / `#pane-detail` dans un
wrapper `#layout`), `css/style.css` (media queries `max-width:759px` /
`min-width:760px`) et `js/app.js` (`renderMenuPane`, `renderDetailPlaceholder`,
`activeMenuEntry()` — le menu affiché est toujours "le menu le plus proche" dans
la pile de navigation, que ce soit l'écran actif ou celui qui a ouvert le contenu
actuellement affiché).

### Navigation article suivant / précédent
Chaque écran d'article doit proposer, en bas, un moyen d'aller à l'article suivant
ou précédent sans repasser par le menu. Lire 15 articles d'affilée en remontant à
chaque fois est trop pénible.

### Schéma de données des articles : liste de blocs typés

**C'est la décision la plus structurante.** Un article n'a PAS une structure fixe :
c'est une liste ordonnée de blocs, chacun avec un `type`. Le moteur de rendu
parcourt la liste et rend chaque bloc selon son type. Ça permet à un article
d'avoir 3 encarts et zéro puce, ou l'inverse, sans toucher au code.

```js
{
  id: 'art01',
  title: '01 — Le bruit te trahit',
  blocks: [
    {type:'tagline', text:'Ils ont de bonnes oreilles. Le silence est ta meilleure armure.'},
    {type:'bullets', items:['Ne cours jamais sans raison en zone urbaine', '...']},
    {type:'callout', label:'RÈGLE D\'OR', text:'Un coup de feu ou une course...'}
  ]
}
```

Types de blocs à supporter (dérivés du contenu réel des deux tomes) :

| Type | Champs | Usage |
|---|---|---|
| `tagline` | `text` | Accroche en italique sous le titre |
| `paragraph` | `text` | Paragraphe de prose simple |
| `subtitle` | `text` | Sous-titre de section (ex: "PREMIERS SECOURS") |
| `bullets` | `items[]` | Liste à puces (le gros du contenu) |
| `callout` | `label`, `text` | Encart encadré (ex: "RÈGLE D'OR") |
| `cards` | `items[{title, text}]` | Grille de petites cartes |
| `figure` | `src`, `caption` | Schéma — **prévu mais pas encore utilisé** |

**Le type `figure` est volontairement défini dès maintenant alors qu'aucun article
ne l'utilise encore.** Les schémas seront ajoutés dans un second temps (décision
explicite : d'abord tout le texte, les schémas après). Le prévoir dans le schéma
évite d'avoir à refactoriser les 25 articles au moment de les ajouter.

Note sur les schémas à venir : 9 planches SVG existent pour le Tome 1 et 6 pour le
Tome 2, mais dans une palette papier/encre/rouille (`#e7dfc6`, `#2a271f`, `#8a3324`)
prévue pour un PDF façon parchemin. Elles devront être **recolorées** vers la palette
ambre/CRT et probablement resimplifiées pour l'écran — ce n'est pas un copier-coller.

## Idées pour plus tard (ne pas traiter maintenant)

- **Easter eggs / worldbuilding** : un fichier corrompu qui refuse de s'ouvrir, une
  entrée verrouillée, un log système qui apparaît après X interactions. À faire une
  fois que la base tourne — c'est le genre de détail qui marque les gens, mais ça
  n'a de sens qu'une fois le contenu en place.
- **Accessibilité clavier poussée** : focus visible au tab, Échap pour revenir en
  arrière. La nav flèches+Entrée existe déjà et suffit pour l'usage réel.
- **Modules non construits** : `02_ROLES_ET_COMPETENCES`, `explorateur_artisanat.html`,
  `04_REFERENCE_TERRAIN`. Le contenu source existe dans les deux tomes.

## Méthode de travail préférée

**Étapes petites et vérifiées, pas de gros morceaux d'un coup.** Un essai précédent
de construire un gros PDF stylé d'un coup (pipeline HTML→PDF Chromium) a échoué
silencieusement et fait perdre du temps. La méthode qui a bien fonctionné : un
petit incrément à la fois, testé, montré, validé, puis on continue.

## Prochaine étape suggérée (à confirmer avec l'utilisateur, pas à lancer seul)

1. Découper le HTML monolithique actuel en la structure de fichiers décrite plus haut
2. Refactoriser l'article 01 déjà porté vers le nouveau schéma de blocs typés
3. Ajouter la nav suivant/précédent et le responsive mobile
4. Porter l'article 02 (Santé) comme test du gabarit sur un article plus long
   avec sous-titres — vérifier que le schéma de blocs tient
5. Seulement ensuite, porter les 13 articles restants du Tome 1

Les schémas viennent après, une fois tout le texte en place.
