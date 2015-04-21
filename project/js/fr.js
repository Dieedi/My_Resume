/*
    french entries for resumeBuilder.js
*/

var skills = ["HTML5", "CSS3", "Javascript", "Git", "Knockout", "Jasmine", "Grunt", "MVC", "Responsive Design", "Bootstrap"];

var bio = {
    "fullname" : "Jeremy POUILLOT",
    "role" : "Développeur Web Front-End",
    "age" : 33,
    "bioPic" : "images/qmark.jpg",
    "skills" : skills,
    "welcomeMessage": "Après 12 ans de support poste de travail, j'ai choisi de prendre une autre voie et de devenir développeur Web.",
    "contacts":
    {
        "mobile": "+33 6 27 74 12 74",
        "email": "pouillot.j@free.fr",
        "github": "Dieedi",
        "location": "Miramas, France"
    }
};

var work = {
    "jobs" : [
    {
        "employer": "Eolen",
        "title": "Technicien support de proximité",
        "location": "Istres, France",
        "dates": "2014/2015",
        "description": "<ul><li>Support technique sur poste de travail Windows XP/7</li><li>Gestion de parc</li><li>ToIP CISCO</li></ul>",
        "img": "images/eolen.png"
    },
    {
        "employer": "Auto-Entrepreneur",
        "title": "Technicien support utilisateurs",
        "location": "Miramas, France",
        "dates": "2011/2013",
        "description": "<ul><li>Support technique sur poste de travail Windows XP/7/8</li><li>Dépannage imprimantes</li><li>Dépannage mobiles</li></ul>",
        "img": "images/ae.jpg"
    },
    {
        "employer": "Autoroutes du Sud de la France",
        "title": "Technicien support bureautique",
        "location": "Avignon, France",
        "dates": "2006/2011",
        "description": "<ul><li>Déploiement/migration Windows 7</li><li>Support technique sur poste de travail Windows XP/7</li><li>Gestion de parc</li><li>ToIP CISCO</li><li>Gestion serveur et flotte BlackBerry</li><li>Réseaux et sécurité</li></ul>",
        "img": "images/vinci.png"
    },
    {
        "employer": "Autoroutes du Sud de la France",
        "title": "Technicien support bureautique",
        "location": "Paris, France",
        "dates": "2002/2006",
        "description": "<ul><li>Support technique sur poste de travail Windows XP</li><li>Gestion de parc</li><li>Gestion des serveurs d'impression et fichiers</li><li>Gestion des sauvegardes</li></ul>",
        "img": "images/vinci.png"
    }
    ]
};

var projects = {
    "projects":[
    {
        "title": "TheFAQ",
        "dates": "2014/2015",
        "description": 'Projet final de la formation CS50, création d\'une FAQ "interactive" en PHP/MySQL',
        "images": ["images/qmark.jpg"],
        "url": "http://thefaq.info"
    },
    {
        "title": "300Pioneros",
        "dates": "2015",
        "description": "Animation réalisé suite à un concours sur Freelancer.com, "
        + "une animation avait été créée sur Adobe Edge mais ne fonctionnait pas correctement",
        "images": ["images/anim.jpg"],
        "url": "http://thefaq.info/300pioneros"
    },
    {
        "title": "Neighbourhood Map",
        "dates": "2015",
        "description": "Réalisation d'une carte interactive avec recherche de marqueurs sous KnockoutJS. "
        + "Utilisation des API Google Maps et Flickr",
        "images": ["images/map.jpg"],
        "url": "http://thefaq.info/map"
    },
    {
        "title": "Tests avec Jasmine",
        "dates": "2015",
        "description": "Implémentation de tests unitaires avec JasmineJS, analyse de l'affichage des flux RSS",
        "images": ["images/jasmine.jpg"],
        "url": "http://thefaq.info/jasmine"
    },
    {
        "title": "Mini Jeu, clone du jeu Frogger",
        "dates": "2015",
        "description": "Utilisation de HTML5 Canvas et programmation Orientée Objet sous Javascript",
        "images": ["images/game.jpg"],
        "url": "http://thefaq.info/game"
    },
    {
        "title": "Application Polymer",
        "dates": "En cours",
        "description": "Utilisation de Polymer pour la création d'une application Web",
        "images": ["images/polymer.svg"],
        "url": "https://github.com/Dieedi/polymer-resume-app"
    }
    ]
};

var education = {
    "onlineCourses" : [
    {
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "2014/2015",
        "url": "https://www.udacity.com/course/nd001",
        "image": "images/nanodegree.svg",
        "description": "Nanodegree créer par Udacity en collaboration avec AT&T."
    },
    {
        "title" : "CS50",
        "school" : "Edx, Harvard",
        "dates" : 2014,
        "url" :
        "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
        "image": "images/edx.png",
        "description": "Introduction au développement."
    }
    ]
};

var hobbies = {
    "hobbies" : [
    {
        'title': 'Javascript katas',
        'url': 'http://www.codewars.com',
        'desc': 'Résolution de petits problèmes en Javascript'
    },
    {
        'title': 'MMORPG',
        'desc': 'Plus que de simples jeux les MMORPG permettent aussi un travail coopératif. Chercher des solutions ensemble pour progresser et avancer.'
    }
    ]
};