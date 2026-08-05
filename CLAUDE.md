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

- Type ordinaire de Knox County, manuellement compétent (mécanicien ou
  quincaillier), bricolait et chassait déjà avant l'effondrement.
- Globalement peu bavard et factuel dans son écriture quotidienne (routine,
  poulailler, réserves) — mais craque un peu dans le ton à deux moments
  précis : la confirmation de ses craintes (Jour 4) et le pic d'horreur
  (Jour 7). Ces deux éclats émotionnels sont volontaires, pas une
  incohérence : ils contrastent avec sa sécheresse habituelle. Ne pas
  généraliser ce ton expressif à tout le reste de son écriture.
- Il prépare ce guide dans l'intention de le partager pour aider un
  maximum de survivants — mais EN SECRET depuis le début. Révéler ce
  qu'il sait (la fuite militaire) l'exposerait à un vrai danger. Le
  LISEZ_MOI_DABORD.txt est la concrétisation tardive de cette intention
  d'aider, pas une idée de dernière minute ni un projet égoïste.
- Il avait un accès non-autorisé à un réseau militaire (jamais expliqué
  comment), qui lui a fait soupçonner l'épidémie avant l'annonce
  officielle. Élément clé du lore : il pense que le gouvernement n'est
  pas seulement informé à l'avance, mais RESPONSABLE de la fuite du
  virus — une accusation de complot plus forte qu'une simple
  connaissance passive. Jamais développée ni prouvée ailleurs dans le
  projet ; jamais confirmée comme vraie non plus.
- Le fil "R." (mentionné une fois, Jour 2) n'est jamais réexpliqué ni
  refermé. Ne pas y revenir sauf décision explicite contraire.
- Numérotation des jours : c'est celle de Kessler, indépendante du jour
  réel de la partie du groupe. Les deux numérotations ne doivent JAMAIS
  être mises en correspondance explicite dans le contenu du disque.
- Journal : dernière entrée Jour 8 (présence suspecte à la clôture).
  Boot : "dernier accès jour 10". Écart de 2 jours, VOLONTAIRE, jamais
  expliqué — ni mort, ni capture, ni fuite confirmée nulle part, y
  compris dans de futurs easter eggs.
- Toute nouvelle feature doit se justifier par "Kessler l'a fait/laissé",
  jamais par "nous, le groupe, on l'ajoute".

### Règles strictes

- Ne jamais ajouter d'entrée de journal après le Jour 8
- Ne jamais confirmer ou infirmer explicitement une disparition, capture ou
  mort
- Ne jamais développer davantage l'accusation de complot gouvernemental
- Ne jamais rouvrir le fil "R."
- Ne jamais faire correspondre explicitement la numérotation de Kessler et
  le jour réel de la partie du groupe

## Règle du full RP (s'applique à tout le contenu et tous les outils)

Rien dans le disque de Kessler ne doit exposer de paramètres ou notions
qui n'existent que parce qu'on est dans un jeu vidéo (nombre de joueurs,
niveau de difficulté, réglages serveur, noms de compétences/traits comme
des choix de menu, etc.). Le configurateur de survie a été retiré du
terminal pour cette raison (voir historique). Avant d'ajouter un nouvel
outil ou contenu, vérifier qu'un survivaliste dans la fiction aurait pu
raisonnablement l'écrire ou l'utiliser tel quel.

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
  jour 10) avant d'afficher le menu

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

Séparé en plusieurs fichiers : `style.css`, `data/fs.js` (arborescence),
`data/phase1.js` / `data/phase2.js` / `data/phase3.js` (articles par phase),
`app.js`, `index.html` — voir "Décisions actées" plus bas pour le détail.

## Bugs déjà rencontrés et corrigés (à ne pas réintroduire)

1. **Apostrophes échappées en double backslash** (`\\'`) cassent les chaînes JS —
   toujours vérifier avec `node --check` après édition.
2. **Balise `</script>` imbriquée** : si on injecte le HTML d'un outil (comme le
   configurateur) comme chaîne dans un `<script>`, il faut échapper `</script`
   en `<\/script` dans la chaîne injectée, sinon le parseur HTML coupe le script
   en plein milieu.
3. **`function top()`** entre en conflit avec `window.top` (référence réservée
   du navigateur) — utiliser un autre nom (`topScreen()` par exemple).

## Arborescence du "disque" (menu racine)

**Restructuration complète actée : plus de découpage par tome (Tome 1 / Tome 2),
l'arborescence suit la vraie progression d'une partie : survie immédiate →
installation → autosuffisance long terme.** Chaque thème n'a plus qu'un seul
article, même quand la matière venait des deux tomes à l'origine (voir "Règle
de fusion" ci-dessous).

```
/KNOX_SURVIE/
├── LISEZ_MOI_DABORD.txt          [fait, contenu réel]
├── 01_PREMIERS_JOURS/             [survie immédiate — 8 articles]
│   ├── Le bruit te trahit
│   ├── Santé & système médical           [FUSION base + approfondi]
│   ├── Fatigue & sommeil
│   ├── Combat & tactique
│   ├── Gestion de l'inventaire
│   ├── Météo & saisons
│   ├── Gestion des cadavres
│   └── Erreurs qui coûtent cher          [clôture de phase, transition implicite]
├── 02_S_INSTALLER/                [installation durable — 5 articles]
│   ├── Choisir & sécuriser sa base
│   ├── Véhicules                          [FUSION base + entretien/mécanique]
│   ├── Vivre en groupe                    [reformulé RP, ex-"spécificités multijoueur"]
│   ├── À chacun son rôle                  [reformulé RP, ex-"compétences & traits"]
│   └── Difficulté croissante              [clôture de phase, transition implicite]
├── 03_DURER/                      [autosuffisance long terme — 4 articles]
│   ├── Eau, nourriture & élevage           [FUSION intro + élevage détaillé]
│   ├── Chasse, piégeage & pêche
│   ├── Agriculture
│   └── Artisanat & autosuffisance          [FUSION intro + les 12 filières]
└── PERSONNEL/
    └── journal.txt                [fait, branché dans le terminal, voir contenu plus bas]
```

17 articles au total (21 avant fusion). `03_OUTILS` et `02_ROLES_ET_COMPETENCES`
(les anciens dossiers) ont disparu : leur seul contenu utilisable a été absorbé
dans les phases ci-dessus (`À chacun son rôle`), le reste (configurateur,
explorateur d'artisanat jamais construit) n'avait pas sa place ou n'existait pas.

### Règle de fusion (la plus importante pour tout contenu à venir)

Chaque paire d'articles qui couvrait le même thème (un du Tome 1 "essentiel", un
du Tome 2 "approfondi") devient **un seul article**, jamais deux à la suite.
Structure interne systématique : on commence par l'essentiel/le vital (l'ancien
Tome 1), on termine par l'approfondi/le fin (l'ancien Tome 2), sans jamais répéter
l'accroche ou l'intro une deuxième fois, et sans aucun renvoi du type "comme vu
précédemment" qui présupposerait l'ancien découpage. La longueur n'est pas un
problème : ce qui compte, c'est que tout y soit, trié dans une progression
logique d'importance. 4 fusions ont eu lieu : Santé, Véhicules, et les deux
volets d'Autosuffisance (Eau/élevage, Artisanat).

Les deux articles-charnières en fin de phase (**Erreurs qui coûtent cher** en fin
de Phase 1, **Difficulté croissante** en fin de Phase 2) portent une courte
retouche de fin qui amène implicitement vers l'idée de la phase suivante — jamais
une phrase explicite du type "passons à la suite".

### Note : contenu du Tome 2 filtré pour rester dans la fiction

Le Tome 2 source (`Sources/Manuel_Technique_Tome2_Illustre.html`) contenait 10
articles, mais 4 d'entre eux s'adressaient explicitement au groupe de joueurs réel
(réglages serveur/mods, répartition des rôles "selon votre nombre de joueurs",
commandes d'administration serveur, liens vers des sites externes comme
pzwiki.net) — Kessler, personnage fictif de 2026, ne peut pas les avoir écrits.
**Décision actée : ces 4 articles ne sont PAS portés dans le terminal, nulle
part.** Les 6 articles compatibles avec la fiction ont été repris, 4 fusionnés
dans leur équivalent Tome 1 (santé, véhicules, élevage, artisanat) et 2 restés
autonomes (chasse/pêche, agriculture) — reformulés au passage pour retirer le
jargon de jeu qui cassait le 4e mur (XP, "vanilla", références de version
B41/B42, capacité serveur/RAM, etc.), tout en gardant le contenu pratique intact.

`Vivre en groupe` et `À chacun son rôle` sont partiellement réécrits (pas une
extraction directe) : leurs sources (Tome 1 "Spécificités multijoueur" et
"Compétences & traits", Tome 2 "Création de personnage & répartition des rôles")
contenaient trop de références au groupe réel ou aux mécaniques de jeu pour être
copiées telles quelles.

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
Jour 1 — J'ai eu accès à des trucs que j'aurais pas dû voir — un vieux
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
planqué le disque plus profond que d'habitude.
```
Le fichier s'arrête là. Rien après le Jour 8 — voir la section lore ci-dessus
pour pourquoi cet écart avec le "jour 10" du boot est volontaire et ne doit
jamais être expliqué.

**Les 17 articles** sont répartis en 3 phases (voir l'arborescence plus haut) et
tous portés intégralement. Sources d'origine :
`Sources/Manuel_Survie_Knox_County_Illustre.html` (Tome 1, converti depuis le PDF)
et `Sources/Manuel_Technique_Tome2_Illustre.html` (Tome 2, converti depuis le docx)
— ces deux fichiers restent la référence si un article doit être retouché ou si le
contenu source doit être revérifié, mais le contenu vivant est entièrement dans
`js/data/phase1.js` / `phase2.js` / `phase3.js`, plus dans l'ancien découpage par
tome.

## Décisions actées (validées avec l'utilisateur — ne pas remettre en question)

### Hébergement : GitHub Pages
Le projet sera publié sur GitHub Pages pour que le groupe y accède par une simple
URL, sans téléchargement. Conséquence directe : **structurer en plusieurs fichiers**
dès le départ (pas un HTML monolithique), puisqu'il n'y a plus besoin de pouvoir
envoyer un fichier unique par Discord.

Structure de fichiers :
```
index.html
css/style.css
js/app.js          (moteur de navigation + rendu)
js/data/fs.js      (arborescence du disque, 3 phases)
js/data/phase1.js  (8 articles — 01_PREMIERS_JOURS)
js/data/phase2.js  (5 articles — 02_S_INSTALLER)
js/data/phase3.js  (4 articles — 03_DURER)
tools/configurateur.html  (hors terminal, non relié au menu — voir Règle du full RP)
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
Chaque écran d'article propose, en bas, un moyen d'aller à l'article suivant ou
précédent sans repasser par le menu. La séquence est **globale et continue sur
les 17 articles, phase par phase** (`PHASE_ORDER` dans `js/app.js`) : aux deux
jonctions de phase (fin Phase 1 → début Phase 2, fin Phase 2 → début Phase 3),
"suivant" enchaîne directement sur le premier article de la phase suivante —
choix délibéré plutôt qu'un retour au menu, pour permettre une lecture continue
de bout en bout façon vraie progression de partie. Le panneau menu à gauche
bascule automatiquement sur la nouvelle phase quand on franchit une jonction
(`goToArticle` met à jour le niveau menu de la pile, pas seulement l'article).
Seuls les deux articles aux extrémités absolues (premier de Phase 1, dernier de
Phase 3) n'ont respectivement pas de "précédent" / pas de "suivant".

### Sommaire interne auto-généré
Tout article contenant **2 blocs `subtitle` ou plus** reçoit automatiquement un
petit sommaire cliquable juste après la tagline (ou après le premier bloc s'il
n'y a pas de tagline). Chaque entrée renvoie à sa section par défilement fluide,
sans quitter l'article. Générique et basé uniquement sur la détection des blocs
au rendu (`renderArticle` dans `js/app.js`) — **jamais codé en dur article par
article**. Fonctionne identiquement en desktop (deux colonnes) et en mobile
(panneau unique).

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
| `figure` | `svg`, `caption` | Schéma SVG inline — voir "Style des schémas" ci-dessous |

**Le type `figure` a été défini bien avant d'être utilisé** (décision explicite :
d'abord tout le texte, les schémas après). Le prévoir dans le schéma dès le début
a évité d'avoir à refactoriser les articles au moment de les ajouter. `svg`
contient le code SVG inline complet (string), injecté tel quel dans le DOM par
`renderBlock` — pas un chemin de fichier, pas d'illustrations importées.

## Style des schémas (grammaire visuelle validée — à respecter à l'identique)

Code de référence, premier schéma validé par l'utilisateur (rayons sonores,
article "Le bruit te trahit") :

```svg
<svg viewBox="0 0 640 420" xmlns="http://www.w3.org/2000/svg">
  <circle cx="320" cy="220" r="190" fill="none" stroke="#ffb02e" stroke-width="1.4" stroke-opacity="0.9" stroke-dasharray="3 5"/>
  <circle cx="320" cy="220" r="140" fill="none" stroke="#ffb02e" stroke-width="1.4" stroke-opacity="0.75" stroke-dasharray="3 5"/>
  <circle cx="320" cy="220" r="90"  fill="none" stroke="#ffb02e" stroke-width="1.6" stroke-opacity="0.9"/>
  <circle cx="320" cy="220" r="42"  fill="none" stroke="#ffb02e" stroke-width="1.8"/>
  <circle cx="320" cy="220" r="4.5" fill="#ffb02e"/>
  <text x="320" y="203" text-anchor="middle" font-family="monospace" font-size="11" fill="#c9d1b8">accroupi</text>
  <text x="320" y="145" text-anchor="middle" font-family="monospace" font-size="11" fill="#c9d1b8">marche</text>
  <text x="320" y="100" text-anchor="middle" font-family="monospace" font-size="11" fill="#c9d1b8">course</text>
  <text x="320" y="18"  text-anchor="middle" font-family="monospace" font-size="11" font-weight="bold" fill="#ff6a4d">coup de feu / moteur</text>
</svg>
```

Chaque cercle doit porter un label : ne pas laisser d'anneau muet dans un schéma à
progression (bug déjà rencontré sur ce premier schéma — seuls le centre et le bord
extérieur étaient labellisés au départ, corrigé en ajoutant "marche" et "course"
sur les deux anneaux intermédiaires).

Principes à appliquer à tout schéma, sans exception :

1. Trait fin, aucun remplissage (`fill="none"` sur les formes), pas d'illustration élaborée
2. Éléments certains/mesurés en trait plein ; éléments approximatifs/théoriques en pointillé (`stroke-dasharray`)
3. Une seule couleur d'accent (`#ffb02e`, l'ambre du terminal) + rouge (`#ff6a4d`) réservé exclusivement aux éléments de danger/urgence
4. Labels en `font-family="monospace"`, petite taille (10-12px), jamais de texte long dans un schéma
5. Fond transparent — jamais de fond dans le SVG lui-même, il hérite du fond sombre du terminal
6. Vérifier que chaque label ne chevauche aucun trait (cercle, ligne) qui le traverserait — repositionner
   le texte plutôt que d'ajouter un fond derrière (pas de fond = principe 5). Bug déjà rencontré : le label
   "accroupi" du premier schéma traversait le cercle intérieur avant correction (y=185 → y=203).

### Pastilles numérotées + légende (pour les schémas à plusieurs points d'intérêt)

Dès qu'un schéma a plus de 2-3 éléments à annoter (ex: un plan), préférer des
petites pastilles numérotées sur le dessin plutôt que des labels textuels
dispersés avec lignes de renvoi — plus lisible, et ça laisse le dessin épuré.
Pattern validé sur le schéma "Choisir & sécuriser sa base" :
- Petit cercle plein (`r="9" fill="#ffb02e"`) + chiffre centré par-dessus en
  texte sombre (`fill="#11150f"`, la couleur de fond du terminal, pas de gris
  générique) — seule exception tolérée au principe 1 (aucun remplissage sur
  les *formes* du dessin), les pastilles sont des marqueurs de points, pas des
  formes illustratives, au même titre que le point central du tout premier
  schéma (`<circle r="4.5" fill="#ffb02e"/>`)
- La légende associée va dans le champ `caption` du bloc `figure` (pas dans le
  SVG) : une seule ligne compacte, format `1 Label · 2 Label · 3 Label`,
  rendue par le CSS existant (`.art-figure-caption`), aucun nouveau champ de
  bloc à ajouter au schéma de données

### Suivi des 8-9 schémas prévus

Un schéma à la fois, montré et validé avant de passer au suivant.

- [x] **Le bruit te trahit** — rayons sonores (code ci-dessus), intégré
- [x] **Santé & système médical** (`sante`) — arbre de décision : blessure visible ?
      → morsure (danger, rouge) / griffure (traitable) ; pas de blessure → maladie (pointillé, incertain), intégré
- [x] **Choisir & sécuriser sa base** (`base`) — plan au sol simplifié, pastilles numérotées, intégré
- [ ] **Combat & tactique** (`combat`) — encerclement en terrain ouvert (dangereux)
      vs goulot d'étranglement (maîtrisable)
- [ ] **Météo & saisons** (`meteo`) — bandes horizontales de pression/danger par saison
- [ ] **Eau, nourriture & élevage** (`eau`) — cycle de routine en boucle
- [ ] **Agriculture** (`agriculture`) — calendrier saisonnier des cultures
- [ ] **Artisanat & autosuffisance** (`artisanat`) — filières classées par moment
      d'intérêt (immédiat / semaine 1 / base stable)
- [ ] **Véhicules** (`vehicules`) — optionnel, seulement si un schéma apporte
      vraiment quelque chose ; sinon l'article reste sans figure

Chaque schéma prend place dans son article au bon endroit narratif (pas
systématiquement en tête), là où il illustre le mieux le propos.

## Idées pour plus tard (ne pas traiter maintenant)

- **Easter eggs / worldbuilding** : un fichier corrompu qui refuse de s'ouvrir, une
  entrée verrouillée, un log système qui apparaît après X interactions. À faire une
  fois que la base tourne — c'est le genre de détail qui marque les gens, mais ça
  n'a de sens qu'une fois le contenu en place.
- **Accessibilité clavier poussée** : focus visible au tab, Échap pour revenir en
  arrière. La nav flèches+Entrée existe déjà et suffit pour l'usage réel.

## Méthode de travail préférée

**Étapes petites et vérifiées, pas de gros morceaux d'un coup.** Un essai précédent
de construire un gros PDF stylé d'un coup (pipeline HTML→PDF Chromium) a échoué
silencieusement et fait perdre du temps. La méthode qui a bien fonctionné : un
petit incrément à la fois, testé, montré, validé, puis on continue.

## Prochaine étape suggérée (à confirmer avec l'utilisateur, pas à lancer seul)

Les 17 articles sont tous portés, fusionnés et organisés en 3 phases. Reste,
dans le désordre et sans urgence particulière :

- Les 8-9 schémas SVG (grammaire visuelle validée, voir "Style des schémas"
  plus haut) — en cours, un à la fois
- Easter eggs / worldbuilding, une fois qu'on a envie de s'y remettre
- Réévaluer si `03_OUTILS` / `explorateur_artisanat.html` méritent de revenir
  sous une forme ou une autre, ou si le disque reste à 3 phases + PERSONNEL
