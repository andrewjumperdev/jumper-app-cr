export const projects = [
  {
    id: 0,
    img: "/img/header-img/samanjo-wallpaper.png",
    title: "Samanjo App",
    description: `Samanjo App est une application web B2B de pointe, conçue pour révolutionner le commerce de gros. Développée avec Next.js et optimisée pour un rendu côté serveur (SSR), cette plateforme offre une expérience utilisateur exceptionnelle et des performances inégalées, même lors du traitement de volumes importants de données.
  
  L'interface moderne et épurée, réalisée avec Tailwind CSS, permet aux entreprises de naviguer aisément dans un catalogue interactif et dynamique, avec des filtres avancés et une recherche intuitive. La gestion des commandes est entièrement automatisée, offrant un suivi en temps réel ainsi qu'une administration simplifiée des stocks et des transactions.
  
  La sécurité occupe une place centrale : l'intégration de Next-Auth assure une authentification robuste, tandis que Stripe garantit des transactions financières sécurisées et rapides. Grâce à son architecture modulaire et scalable, Samanjo App s'adapte facilement aux évolutions du marché B2B et aux besoins spécifiques des entreprises, offrant ainsi une solution complète et évolutive pour optimiser les opérations commerciales.`,
    thumbnail: "/img/logo-samanjo.png",
    urlProject: "https://github.com/YourGitHubUsername/SamanjoApp",
    repository: "https://github.com/YourGitHubUsername/SamanjoApp",
    mainTools: [
      "javascript",
      "nextjs",
      "react",
      "tailwindcss",
      "next-auth",
      "stripe",
    ],
    technicalDetails: [
      {
        title: "Catalogue Interactif et Dynamique",
        description: `Système de présentation des produits permettant une navigation fluide, une recherche optimisée et des filtres avancés pour accéder rapidement aux informations pertinentes.`,
      },
      {
        title: "Gestion Avancée des Commandes",
        description: `Interface d'administration complète facilitant le suivi en temps réel des commandes, la gestion des stocks et l'automatisation des processus logistiques, essentielle pour le commerce de gros.`,
      },
      {
        title: "Transactions Sécurisées",
        description: `Intégration de Stripe pour garantir des paiements en ligne rapides et sécurisés, assurant ainsi la fiabilité des transactions commerciales.`,
      },
      {
        title: "Authentification et Sécurité Renforcées",
        description: `Implémentation de Next-Auth pour une authentification robuste, protégeant l'accès aux données sensibles et assurant la confidentialité des informations des entreprises.`,
      },
      {
        title: "Performance et Scalabilité",
        description: `Développé avec Next.js pour un rendu côté serveur optimal et une architecture modulaire qui permet une maintenance aisée et une évolutivité rapide, même sous de fortes charges.`,
      },
    ],
  },
  {
    id: 1,
    img: "/img/yumi-id.jpeg",
    title: "Server Yumi-Id",
    description: `Ce serveur est une application Express.js pour gérer les téléversements 
                    de fichiers et traiter les données en fonction des informations reçues 
                    telles que les adresses MAC des appareils et les horodatages. Il 
                    utilise des middlewares tels que multer pour la gestion des fichiers 
                    et fournit des routes pour télécharger des fichiers et gérer les requêtes.`,
    thumbnail: "/wanhao_LOGO.avif",
    urlProject: "https://github.com/Yumi-Lab/YUMI-ID",
    repository: "https://github.com/Yumi-Lab/YUMI-ID",
    mainTools: ["javascript", "express", "multer", "mocha", "ejs"],
    technicalDetails: [],
  },
  {
    id: 2,
    img: "/img/wanhao-site.jpeg",
    title: "Site e-commerce Wanhao France",
    description: `La structure du thème Shopify est organisée en différentes dossiers et fichiers. Dans "Assets", vous trouverez des ressources telles que des images et des fichiers CSS/JS. La section "Config" stocke les paramètres généraux et des produits. "Layout" définit la disposition des éléments sur les pages. "Locales" contient des fichiers pour la localisation du site. "Sections" définit des zones de contenu réutilisables. "Snippets" stocke des fragments de code réutilisables. Enfin, "Templates" propose des modèles prédéfinis pour structurer et présenter le contenu des pages.`,
    thumbnail: "/img/wanhao-site.jpeg",
    urlProject: "https://wanhao-europe.com/",
    repository: "https://github.com/Wanhao-France/yumi-europe",
    mainTools: ["javascript", "html", "css", "shopify", "liquid"],
    technicalDetails: [
      {
        title: "Assets",
        description: `
          Mise à jour des fichiers d'actifs, tels que les images, les styles CSS, les scripts JS, etc.
          `,
      },
      {
        title: "Configuration",
        description: `
          Mise à jour de la configuration du thème, pouvant inclure des paramètres généraux, la configuration des produits, les options de paiement, etc.
          `,
      },
      {
        title: "Layout",
        description: `
          Mise à jour de la structure de mise en page du site web, comme la disposition des éléments sur la page, les conteneurs, etc.
          `,
      },
      {
        title: "Sections",
        description: `
          Mise à jour des sections du site web, pouvant inclure des zones de contenu réutilisables, des widgets, etc.
          `,
      },
      {
        title: "Snippets",
        description: `
          Mise à jour des extraits de code réutilisables utilisés dans plusieurs parties du site web.
          `,
      },
      {
        title: "Templates",
        description: `
          Mise à jour des modèles de page prédéfinis qui déterminent la structure et le contenu des pages du site web.
          `,
      },
    ],
  },
  {
    "id": 3,
    "title": "Bot de Trading Automatisé",
    "img": "/img/Portada-Traiding.png",
    "description": "Ce bot de trading automatisé détecte les opportunités d'entrée en analysant les tendances du marché, calcule les points de gains et de pertes afin de gérer des micro-comptes avec une rentabilité attendue de 8 à 12 %. Connecté à MetaTrader5, il exécute les ordres avec précision et utilise un trailing stop pour minimiser les pertes. De plus, il intègre une base de données qui enregistre un journal détaillé de chaque opération, permettant une analyse technique approfondie pour ajuster et améliorer la stratégie. Il dispose également d'une interface frontend simple qui permet à l'utilisateur de se connecter, d'activer le bot, de surveiller les opérations en temps réel et de gérer les lots, ouvrant la possibilité d'évoluer vers un système de copy trading à l'avenir.",
    "thumbnail": "/img/Portada-Traiding.png",
    "urlProject": "https://github.com/andrewjumperdev/BotTraiding",
    "repository": "https://github.com/andrewjumperdev/BotTraiding",
    "mainTools": ["python", "MetaTrader5", "pandas", "numpy", "flask"],
    "technicalDetails": [
      {
        "title": "Connexion avec MetaTrader5",
        "description": "Utilise l'API MetaTrader5 pour se connecter au broker, envoyer des ordres d'achat/vente et gérer les opérations de manière automatisée."
      },
      {
        "title": "Stratégie de Trading",
        "description": "Implémente une stratégie basée sur l'analyse des tendances, la détection des points d'entrée et l'utilisation d'un trailing stop pour réduire les pertes et maximiser la rentabilité."
      },
      {
        "title": "Gestion des Micro-Comptes",
        "description": "Optimise la gestion des micro-comptes grâce au calcul dynamique des lots, garantissant une rentabilité constante entre 8 et 12 %."
      },
      {
        "title": "Enregistrement et Analyse des Opérations",
        "description": "Intègre une base de données qui stocke un journal détaillé de chaque opération, facilitant l'analyse technique et l'ajustement des stratégies."
      },
      {
        "title": "Interface Frontend",
        "description": "Dispose d'une interface web simple développée avec Flask, permettant aux utilisateurs de se connecter, d'activer le bot, de surveiller les opérations et d'ajuster les paramètres en temps réel."
      }
    ]
  },
  {
    id: 4,
    img: "/img/Portada-Kanap.png",
    title: "Site e-commerce Kanap",
    description: `L’application web est composée de 4 pages : Une page d’accueil montrant (de manière dynamique) tous les articles disponibles à
        la vente. Une page “produit” qui affiche (de manière dynamique) les détails du produit sur
        lequel l'utilisateur a cliqué depuis la page d’accueil. Depuis cette page, l’utilisateur
        peut sélectionner une quantité, une couleur, et ajouter le produit à son panier.
        Une page “panier”. Celle-ci contient plusieurs parties; Un résumé des produits dans le panier, le prix total et la possibilité de
        modifier la quantité d’un produit sélectionné ou bien de supprimer celui-ci.Un formulaire permettant de passer une commande. Les données du
        formulaire doivent être correctes et bien formatées avant d'être renvoyées au
        back-end. Par exemple, pas de chiffre dans un champ prénom.
        Une page “confirmation”;Un message de confirmation de commande, remerciant l'utilisateur pour sa
        commande, et indiquant l'identifiant de commande envoyé par l’API.`,
    thumbnail: "/Kanap.png",
    urlProject: "https://github.com/andrewjumperdev/Kanap",
    repository: "https://github.com/andrewjumperdev/Kanap",
    mainTools: ["javascript", "html", "css"],
    technicalDetails: [
      {
        title: "GET /",
        description: `
            Verbe: GET
              Paramètre prévu: Aucun
              Corps de la demande: Aucun
              Réponse: Retourne un tableau contenant tous les éléments de l'API.
            `,
      },
      {
        title: "GET /{product-ID}",
        description: `
            Verbe: GET
            Paramètre prévu: {product-ID} (identifiant du produit à récupérer)
            Corps de la demande: Aucun
            Réponse: Renvoie l'élément correspondant à {product-ID}, c'est-à-dire l'élément ayant l'identifiant spécifié.
            `,
      },
      {
        title: "POST /order",
        description: `
            Verbe: POST
            Paramètre prévu: Aucun
            Corps de la demande: Requête JSON contenant un objet de contact et un tableau de produits.
            Réponse: Retourne un objet contact, un tableau de produits et un orderId (identifiant de la commande).
            `,
      },
      {
        title: "Validation des données pour POST /order",
        description: `
            L'objet de contact envoyé au serveur doit contenir les champs suivants: firstName, lastName, address, city et email.
            Le tableau de produits envoyé au serveur doit être un array de strings product-ID.
            Avant l'envoi des données au serveur, les types de ces champs et leur présence doivent être validés pour s'assurer de la conformité des données.
            `,
      },
    ],
  },
  {
    id: 5,
    title: "Piiquante API",
    img: "/img/Portada-Piiquante.png",
    description: `Piiquante est une application web dédiée à la création de sauces épicées avec des recettes secrètes. Son objectif est de générer plus de buzz en permettant aux utilisateurs d'ajouter leurs sauces préférées et de liker ou disliker les sauces ajoutées par d'autres. L'application propose des fonctionnalités telles que l'authentification des utilisateurs, la visualisation des sauces existantes, l'ajout de nouvelles sauces avec des images, la mise à jour des sauces existantes, ainsi que la possibilité de liker et disliker les sauces. Les mots de passe des utilisateurs sont sécurisés grâce à un hachage, et l'accès aux routes de sauce requiert une authentification appropriée. Les adresses électroniques sont uniques pour assurer l'unicité des utilisateurs, et les erreurs de base de données sont gérées grâce à un plugin Mongoose. Le projet est sous licence MIT, encourage les contributions et respecte les normes de sécurité actuelles.`,
    thumbnail: "/piiquante.png",
    urlProject: "https://github.com/andrewjumperdev/API-Project-Piiquante",
    mainTools: ["javascript", "expressjs", "mongodb", "jwt"],
    technicalDetails: [
      {
        title: `Endpoints de l'API:`,
        description: [
          `POST /api/auth/signup: Enregistre un nouvel utilisateur en hachant son mot de passe et l'ajoutant à la base de données.`,
          `POST /api/auth/login: Vérifie les informations d'identification de l'utilisateur et renvoie l'ID de l'utilisateur et un token web JSON signé.`,
          `GET /api/sauces: Renvoie un tableau contenant toutes les sauces de la base de données.`,
          `GET /api/sauces/:id: Renvoie la sauce avec l'ID fourni.`,
          `POST /api/sauces: Capture et enregistre l'image, analyse la sauce et enregistre les informations dans la base de données.`,
          `PUT /api/sauces/:id: Met à jour la sauce avec l'ID fourni, en modifiant l'image si fournie.`,
          `DELETE /api/sauces/:id: Supprime la sauce avec l'ID fourni.`,
          `POST /api/sauces/:id/like: Définit le statut "Like" pour l'utilisateur fourni et met à jour le nombre total de "Like" et "Dislike" pour chaque sauce.`,
        ],
      },
      {
        title: `Exigences de sécurité`,
        description: [
          `Hachage du mot de passe de l'utilisateur lors de l'enregistrement.`,
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Kasa React Project",
    img: "/img/Portada-Kasa.png",
    description: `Create React App: Le projet doit être créé en utilisant Create React App, un outil qui facilite la configuration initiale d'une application React.
        React Router: Pour gérer la navigation entre différentes pages, React Router doit être utilisé. Les paramètres des routes doivent être gérés dans l'URL pour récupérer les informations spécifiques à chaque logement.
        Styling: L'utilisation de Sass pour le style est facultative. Par défaut, CSS doit être utilisé pour le design.
        Pas de librairie React externe: L'utilisation de librairies externes à React n'est pas autorisée.
        Contraintes Techniques pour React :
        Pour garantir un code de qualité, les éléments suivants de React doivent être pris en compte :
        
        Découpage en composants modulaires et réutilisables: Le code doit être structuré en composants indépendants et réutilisables, facilitant ainsi la maintenance et la compréhension du code.
        Un composant par fichier: Chaque composant doit être défini dans un fichier séparé, favorisant l'organisation du code et la lisibilité.
        Structure logique des fichiers: La structure du projet doit être bien organisée, avec une séparation claire des dossiers pour les composants, les styles, etc.
        Utilisation des props entre les composants: Les composants doivent communiquer entre eux en utilisant les props, permettant de transmettre des données de manière descendante dans l'arbre des composants.
        Utilisation du state dans les composants quand c'est nécessaire: Le state de React doit être utilisé lorsque des données sont sujettes à des changements et doivent être gérées localement au sein d'un composant.
        Gestion des événements: Les interactions utilisateur doivent être gérées via la gestion des événements de React.
        Listes: Les listes doivent être exploitées en utilisant les fonctionnalités de React, notamment en utilisant la méthode map pour itérer sur les éléments de la liste.
        Il est recommandé, mais pas obligatoire, d'utiliser des composants fonctionnels plutôt que des composants de classe pour bénéficier des avantages des hooks de React.
        
        Contraintes Techniques pour React Router :
        
        Page par route: Chaque route doit être associée à une page spécifique.
        Page 404: Une page 404 doit être renvoyée si une route n'existe pas ou si une valeur présente dans l'URL ne correspond pas aux données disponibles.
        Logique du routeur en un seul fichier: La logique de gestion des routes doit être regroupée dans un seul fichier pour une meilleure organisation.
        Général :
        
        Absence d'erreurs ou de warnings: Le code final ne doit pas produire d'erreurs ou de warnings dans la console du navigateur, garantissant ainsi une application robuste et stable.`,
    thumbnail: "/Kasa.png",
    urlProject: "https://github.com/andrewjumperdev/Kasa-React-Project",
    mainTools: ["javascript", "html", "scss", "react", "react-router"],
    technicalDetails: [
      {
        title: `React`,
        description: [
          `Il est impératif d’utiliser ces éléments de React pour un code de qualité`,
          `Découpage en composants modulaires et réutilisables`,
          "Un composant par fichier ",
          "Structure logique des différents fichiers ",
          "Utilisation des props entre les composants",
          `Utilisation du state dans les composants quand c'est nécessaire `,
        ],
      },
      {
        title: `React Router`,
        description: [
          `Les paramètres des routes sont gérés par React Router dans l'URL
              pour récupérer les informations de chaque logement.`,
          `Il existe une page par route.`,
          `La page 404 est renvoyée pour chaque route inexistante, ou si une
              valeur présente dans l’URL ne fait pas partie des données
              renseignées.`,
          `La logique du routeur est réunie dans un seul fichier.`,
        ],
      },
    ],
  },
  {
    id: 7,
    img: "/img/Portada-Python.png",
    title: "Web Scrapper",
    description: `Ce projet consiste en un script Python pour effectuer le web scraping d'un site web donné. L'objectif est de récupérer tous les liens présents sur une page spécifique du site, de les valider et de générer un rapport des liens invalides. Pour cela, nous utilisons les bibliothèques BeautifulSoup, requests, pandas, numpy et yagmail.
    
        Étape 1 : Initialisation
        
        Le script commence par définir l'URL cible à partir de laquelle nous voulons extraire les liens. Dans cet exemple, l'URL est "https://testing.com/fr/plan-du-site".
        Étape 2 : Web Scraper
        
        Nous utilisons BeautifulSoup pour analyser le contenu HTML de la page cible et extraire tous les liens (<a>) qu'elle contient. Ces liens sont stockés dans une liste appelée links.
        Étape 3 : Validation des liens
        
        Nous validons ensuite chaque lien récupéré en effectuant des requêtes HTTP vers chacun d'eux. Les liens valides sont stockés dans une liste appelée correct_links, tandis que les liens invalides sont enregistrés dans une autre liste appelée error_links. Les liens invalides peuvent être ceux qui génèrent des erreurs lorsqu'on tente d'y accéder (par exemple, 404 Not Found), ou des redirections non valides (par exemple, 301 ou 302).
        Étape 4 : Génération du rapport
        
        Les liens invalides sont enregistrés dans un fichier CSV appelé error-links.csv à l'aide de la bibliothèque numpy.
        Étape 5 : Envoi d'un rapport par e-mail
        
        Le script utilise yagmail pour envoyer un rapport par e-mail. Pour cela, une adresse e-mail et un mot de passe valides sont requis pour accéder au service SMTP. Le rapport envoyé par e-mail contient la liste des liens invalides récupérés à partir du fichier CSV.
        Ce web scraper est utile pour effectuer une vérification de la validité des liens sur une page web spécifique. Il peut être adapté et étendu pour d'autres cas d'utilisation similaires. Toutefois, veillez à respecter les conditions d'utilisation du site web que vous scrapez et évitez de surcharger le serveur avec des requêtes excessives.`,
    thumbnail: "/python-ws.png",
    urlProject: "",
    mainTools: ["python"],
    technicalDetails: [
      {
        title: `Web Scraper Sommaire`,
        description: [
          `Un web scraper est un programme qui extrait automatiquement des données à partir de sites web. Il est très utile pour collecter des informations à grande échelle sans avoir à les saisir manuellement.`,
          `Le web scraper utilise des bibliothèques comme Beautiful Soup ou Scrapy pour parcourir le code HTML des pages web et extraire les données souhaitées.`,
          `Il peut être configuré pour extraire des données spécifiques, telles que des titres, des descriptions, des prix ou des images, en fonction des balises HTML, des classes CSS ou d'autres critères.`,
          `Le web scraper peut également suivre des liens et naviguer à travers plusieurs pages pour collecter des données à partir de plusieurs sources.`,
          `L'utilisation du web scraper doit être éthique et respecter les politiques d'utilisation du site web cible. Il est important de vérifier si le site autorise le scraping et de ne pas surcharger le serveur avec des requêtes excessives.`,
        ],
      },
    ],
  },
 
  
];
