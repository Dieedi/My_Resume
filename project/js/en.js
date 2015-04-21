/*
    english entries for resumeBuilder.js
*/

var skills = ["HTML", "CSS", "Javascript", "Git", "Knockout", "Jasmine", "Grunt", "MVC", "Responsive Design", "Bootstrap"];

var bio = {
    "fullname" : "Jeremy Pouillot",
    "role" : "Front-End Web Developer",
    "age" : 33,
    "bioPic" : "images/qmark.jpg",
    "skills" : skills,
    "welcomeMessage": "After 12 years as IT support, I choose to take an other path and become a Web Developer.",
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
        "title": "IT Support",
        "location": "Istres, France",
        "dates": "2014/2015",
        "description": "<ul><li>Technical support on Windows computers</li><li>Parc Management</li><li>VoIP CISCO</li></ul>",
        "img": "images/eolen.png"
    },
    {
        "employer": "Self Entreprise",
        "title": "Consumer IT support",
        "location": "Miramas, France",
        "dates": "2011/2013",
        "description": "<ul><li>IT support on Windows XP/7/8</li><li>Printers support</li><li>Mobility Support</li></ul>",
        "img": "images/ae.jpg"
    },
    {
        "employer": "Autoroutes du Sud de la France",
        "title": "IT Support",
        "location": "Avignon, France",
        "dates": "2006/2011",
        "description": "<ul><li>Deployment/migration Windows 7</li><li>IT support on Windows XP/7</li><li>Parc Management</li><li>VoIP CISCO</li><li>BlackBerry mobiles and servers management</li><li>Network and security</li></ul>",
        "img": "images/vinci.png"
    },
    {
        "employer": "Autoroutes du Sud de la France",
        "title": "IT Support",
        "location": "Paris, France",
        "dates": "2002/2006",
        "description": "<ul><li>IT support on Windows XP</li><li>Parc Management</li><li>Print and files servers management</li><li>Backup management</li></ul>",
        "img": "images/vinci.png"
    }
    ]
};

var projects = {
    "projects":[
    {
        "title": "TheFAQ",
        "dates": "2014/2015",
        "description": "Final project of CS50 course, designed for intranet usage",
        "images": ["images/qmark.jpg"],
        "url": "http://thefaq.info"
    },
    {
        "title": "300Pioneros",
        "dates": "2015",
        "description": "Animation done for a contest on Freelancer.com, "
        + "An animation was made with Adobe Edge but didn't works fine",
        "images": ["images/anim.jpg"],
        "url": "http://thefaq.info/300pioneros"
    },
    {
        "title": "Neighbourhood Map",
        "dates": "2015",
        "description": "Interactive map with list and markers filter with KnockoutJS. "
        + "Google Maps and Flickr APIs usage",
        "images": ["images/map.jpg"],
        "url": "http://thefaq.info/map"
    },
    {
        "title": "Unit testing with Jasmine",
        "dates": "2015",
        "description": "Unit tests implementation with JasmineJS, Check rss feeds display",
        "images": ["images/jasmine.jpg"],
        "url": "http://thefaq.info/jasmine"
    },
    {
        "title": "Small game, Frogger clone",
        "dates": "2015",
        "description": "OO Javascript and canvas",
        "images": ["images/game.jpg"],
        "url": "http://thefaq.info/game"
    },
    {
        "title": "Polymer App",
        "dates": "In progress",
        "description": "Using Polymer to create a Web App",
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
        "description": "Nanodegree built by Udacity with AT&T."
    },
    {
        "title" : "CS50",
        "school" : "Edx, Harvard",
        "dates" : 2014,
        "url" :
        "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x",
        "image": "images/edx.png",
        "description": "Introduction to Computer Sciences."
    }
    ]
};

var hobbies = {
    "hobbies" : [
    {
        'title': 'Javascript katas',
        'url': 'http://www.codewars.com',
        'desc': 'Solving small problems with Javascript'
    },
    {
        'title': 'MMORPG',
        'desc': 'Mora than games MMORPG allows collaborative works, looking for progression and go further.'
    }
    ]
};