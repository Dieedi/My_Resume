// functions to display resume. Variables in json.js
getLang();

menu();

displayBtn();

changeTitle();

displayNav();

displaySkills();

displayWork();

displaySchools();

displayProjects();

addMap();

displayClicks();

var userLang;

/* check for language/load language files/listen for click on language button */
function getLang() {
    if (!localStorage.getItem("lang")) {
        // detect browser/user language
        userLang = navigator.language || navigator.userLanguage;
        setLang();
    } else {
        userLang = localStorage.getItem("lang");
        setLang();
    }
}

// change language file depending on detected language
function setLang() {
    if (userLang === "fr") {
        $("<script src='js/fr.js'></script>").insertAfter("#helper");
        // load english button onclick function
        loadLang(userLang);
    } else {
        $("<script src='js/en.js'></script>").insertAfter("#helper");
        // load french button onclick function
        loadLang(userLang);
    }
}

function loadLang() {
    $(document).ready(function() {
    $('#lang').click(function() {
        if (userLang === "fr") {
            userLang = "en";
        } else {
            userLang = "fr";
        }
        // store userLang
        localStorage.setItem("lang", userLang);
        // reload page
        document.location.reload();
    });
    });
}

// display main header (navbar content)
function displayNav() {
    $("#name").append(HTMLheaderName.replace("%data%", bio.fullname));
    $("#name").append(HTMLheaderRole.replace("%data%", bio.role));
    $("#welcome").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg));
    // $("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
    $("#topContacts").prepend(HTMLgithub.replace(/(%data%)/gm, bio.contacts.github));
    $("#topContacts").prepend(HTMLmobile.replace(/(%data%)/gm, bio.contacts.mobile));
    $("#topContacts").prepend(HTMLemail.replace(/(%data%)/gm, bio.contacts.email));
}

// change button for language switch
function displayBtn() {
    if (userLang === "fr") {
        $("#topButtons").prepend(HTMLheaderBtn.replace("%data%", "en"));
    } else {
        $("#topButtons").prepend(HTMLheaderBtn.replace("%data%", "fr"));
    }
}

// change titles
function changeTitle() {
    if (userLang === "fr") {
        // switching fr/en menu list
        $(".skills").html("<a href='#skillsSect'>Compétences</a>");
        $(".exp").html('<a href="#exp">Expérience pro</a>');
        $(".projects").html('<a href="#projectsSect">Projets</a>');
        $(".education").html('<a href="#education">Education</a>');
        $(".mapSect").html('<a href="#mapSect">Carte</a>');

        // switching fr/en Titles
        $("#welcome .secTitle").html("<h4>Bienvenue</h4>");
        $("#skillsSect .secTitle").html("<h4>Compétences</h4>");
        $("#exp .secTitle").html("<h4>Expérience</h4>");
        $("#projectsSect .secTitle").html("<h4>Projets</h4>");
        $("#education .secTitle").html("<h4>Education</h4>");
    }
}

// display skills
function displaySkills() {
    if (bio.skills !== null) {
        $("#skills .content").append(HTMLskillsStart);
        if (userLang === "fr") {
            $("#skillsH3").text("Compétences:");
        } else {
            $("#skillsH3").text("Skill at a Glance:");
        }

        for (webSkill in skills.webSkills) {
            var formattedSkills = HTMLskillsHtml.replace("%data%", skills.webSkills[webSkill]);
            $("#skills .content").append(formattedSkills);
        }

        for (otherSkill in skills.otherSkills) {
            var formattedSkills = HTMLskillsOther.replace("%data%", skills.otherSkills[otherSkill]);
            $("#skills .content").append(formattedSkills);
        }
    }
}

// display work experience
function displayWork() {
    $("#work").append(HTMLworkStart);
    for (job in work.jobs) {
        $("#work .content").append(HTMLworkentryStart);
        var formattedJobs = HTMLworkEmployer.replace("%data%", work.jobs[job].employer)
            + HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedJobs);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

//  display education
function displaySchools() {
    $("#school").append(HTMLschoolStart);
    for (onlineCourse in education.onlineCourses) {
        $("#school .content").append(HTMLschoolentryStart);
        var formattedSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title)
            + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(formattedSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace(/(%data%)/gm, education.onlineCourses[onlineCourse].url));
    }
    for (school in education.schools) {
        $("#school .content").append(HTMLschoolentryStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
    }
}

// projects display
function displayProjects() {
    $("#projects").append(HTMLprojectStart);
    for (project in projects.projects) {
        $("#projects .content").append(HTMLprojectentryStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images));
        };
    }
}

// add map
function addMap() {
    $("#mapDiv").append(googleMap);
}

// internationalize change with switch at start of file
// $("#main").append(internationalizeButton);
// replaced by switch language functions

// Expand menu list on click
function menu() {
    $(document).ready(function () {
        $(".menuBtn").click(function () {
            $(".menuBtn").toggleClass("open");
        });

        // check for class "open" after click on document
        $(document).click(function (event) {
            if(!$(event.target).closest(".menuBtn").length) {
                if ($(".open").length) {
                    $(".open").removeClass("open");
                }
            }
        });
    });
}

//display click locations on the page
function displayClicks() {
    $(document).click(function(loc) {
        logClick(loc.pageX, loc.pageY);
    });

    function logClick(x, y) {
        console.log(x,y);
    }
}