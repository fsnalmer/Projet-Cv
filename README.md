# Portfolio — Noah Grynko

Site personnel / CV en ligne de Noah Grynko, élève en seconde professionnelle MTNE
au lycée Ampère de Josselin, présentant son profil pour des recherches de stage
(électricité, informatique, réseaux).

🔗 **Site en ligne :** https://fsnalmer.github.io/Projet-Cv/

## Stack technique

Site statique, sans dépendance ni build :

- HTML5 sémantique
- CSS3 (variables CSS, grid/flexbox, `prefers-color-scheme`)
- JavaScript vanilla (aucune librairie)
- Police [Sora](https://fonts.google.com/specimen/Sora) / [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts

## Structure du projet

```
.
├── index.html              # Page unique du portfolio
├── 404.html                 # Page d'erreur avec redirection
├── css/
│   └── styles.css          # Styles (clair/sombre, responsive, animations)
├── js/
│   └── main.js              # Menu mobile, animations au scroll, bouton CV
├── assets/
│   ├── favicon.svg
│   └── CV_Grynko_Noah.pdf  # ⚠️ à ajouter (voir ci-dessous)
└── .github/workflows/
    └── deploy.yml            # Déploiement automatique sur GitHub Pages
```

## ⚠️ Fichier CV à finaliser

Le CV source est un design Canva. Pour des raisons de restriction réseau côté
outil d'automatisation, le PDF n'a pas pu être téléchargé et déposé
automatiquement dans le dépôt. En attendant, le bouton **« Télécharger mon
CV »** :

1. essaie d'ouvrir `assets/CV_Grynko_Noah.pdf` ;
2. si ce fichier n'existe pas encore, il ouvre automatiquement la page Canva
   publique du CV dans un nouvel onglet.

Pour finaliser le téléchargement direct :

1. Exportez le CV en PDF depuis Canva (page 1 du design).
2. Déposez le fichier obtenu à l'emplacement `assets/CV_Grynko_Noah.pdf`
   (même nom exact).
3. Committez et poussez — le bouton utilisera alors directement ce fichier.

## Développer en local

Aucune installation n'est nécessaire. Ouvrez simplement `index.html` dans un
navigateur, ou lancez un petit serveur local :

```bash
python3 -m http.server 8000
# puis ouvrez http://localhost:8000
```

## Déploiement (GitHub Pages)

Le déploiement est automatique via GitHub Actions (`.github/workflows/deploy.yml`)
à chaque push sur `main` ou `claude/portfolio-github-pages-w16pl0`.

Configuration à faire une seule fois dans le dépôt (Settings → Pages) :

- **Source** : `GitHub Actions`

Une fois activé, chaque push redéclenche automatiquement le build et la
publication du site.

## Modifier le contenu plus tard

- Textes et sections : `index.html`
- Couleurs, typographies, mise en page : `css/styles.css`
- Comportements (menu, animations, bouton CV) : `js/main.js`
- CV téléchargeable : remplacer `assets/CV_Grynko_Noah.pdf`

## Licence / Contenu

Contenu personnel — © Noah Grynko. Code source libre de réutilisation comme
base pour un portfolio personnel.
