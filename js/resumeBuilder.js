

var skills = ["not", "much", "yet"];

var bio = {
    "fullname" : "Jeremy POUILLOT",
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
        "description": "<ul><li>Technical support on Windows computers</li><li>Parc Management</li><li>VoIP CISCO</li></ul>"
    },
    {
        "employer": "Autoroutes du Sud de la France",
        "title": "IT support",
        "location": "Paris & Avignon, France",
        "dates": "2002/2011",
        "description": "<ul><li>Technical support on Windows computers</li><li>Parc Management</li><li>VoIP CISCO</li><li>BlackBerry Management</li><li>Mobiles Management</li><li>Network & Security</li></ul>"
    }
    ]
};

var projects = {
    "projects":[
    {
        "title": "TheFAQ",
        "dates": "2014/2015",
        "description": "Final project of CS50 course, designed for intranet usage",
        "images": ["http://thefaq.info/img/qmark.jpg"]
    },
    {
        "title": "test",
        "dates": "2014",
        "description": "testlineforjscourse",
        "images": ["azerty"]
    }
    ]
};

var education = {
    "schools" : [
    {
        "name" : "ISCIO",
        "location" : "Orsay",
        "degree" : "BTS",
        "dates" : 2004
    }
    ],
    "onlineCourses" : [
    {
        "title" : "CS50",
        "school" : "Edx, Harvard",
        "dates" : 2014,
        "url" :
        "https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
    },
    {
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "2014/2015",
        "url": "https://www.udacity.com/course/nd001"
    }
    ]
};

// display main header
$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").prepend(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.fullname));


// display skills
if (bio.skills !== null)
{
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
}

// display work experience
displayWork();

function displayWork() {
    for (job in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);
        var formattedJobs = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedJobs);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
};

//  display education
displaySchools();

function displaySchools() {
    for (school in education.schools)
    {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    }
    for (onlineCourse in education.onlineCourses)
    {
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title));
        $(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
        $(".education-entry").append(HTMLonlineURL.replace(/(%data%|"#")/gm, education.onlineCourses[onlineCourse].url));
    }
}

/*
*   display click locations on the page
*   $(document).click(function(loc) {
*       logClick(loc.pageX, loc.pageY);
*   });
*
*   function logClick(x, y) {
*       console.log(x,y);
*   }
*/

// projects display
projects.display = function() {
    for (project in projects.projects)
    {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
    }
}

projects.display();

// add map
$("#mapDiv").append(googleMap);
// internationalize
