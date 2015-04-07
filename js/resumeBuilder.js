// functions to display resume. Variables in json.js

// display main header
// $("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header #topContacts").prepend(HTMLgithub.replace(/(%data%)/gm, bio.contacts.github));
$("#header #topContacts").prepend(HTMLmobile.replace(/(%data%)/gm, bio.contacts.mobile));
$("#header #topContacts").prepend(HTMLemail.replace(/(%data%)/gm, bio.contacts.email));

// change button for language switch
if (userLang === "fr")
{
    $("#header #topContacts").prepend(HTMLheaderBtn.replace("%data%", "uk"));
}
else
{
    $("#header #topContacts").prepend(HTMLheaderBtn.replace("%data%", "fr"));
}

$("#name").append(HTMLheaderName.replace("%data%", bio.fullname));
$("#name").append(HTMLheaderRole.replace("%data%", bio.role));

// change titles
if (userLang === "fr")
{
    // switching fr/en Titles
    $(".work").html("<h2 class='panel-title'><a data-toggle='collapse'\
        data-parent='#accordion' href='#collapseOne' aria-expanded='true'\
        aria-controls='collapseOne' id='collapseExp'>Expérience</a></h2>");

    $(".proj").html("<h2 class='panel-title'>\
        <a data-toggle='collapse' data-parent='#accordion' href='#collapseTwo'\
        aria-expanded='true' aria-controls='collapseTwo' id='collapseProj'>\
        Projets</a></h2>");

    $(".educ").html("<h2 class='panel-title'>\
        <a data-toggle='collapse' data-parent='#accordion' href='#collapseThree'\
        aria-expanded='true' aria-controls='collapseThree' id='collapseEdu'>\
        Formation</a></h2>");

    $("#mapDiv").html("<h2>Où j'ai vécu et travaillé</h2>");
}

// display skills
if (bio.skills !== null)
{
    $("#headerSkills").append(HTMLskillsStart);
    if (userLang === "fr")
    {
        $("#skillsH3").text("Compétences:");
    }
    else
    {
        $("#skillsH3").text("Skill at a Glance:");
    }

    for (skill in skills)
    {
        var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkills);
    }
}

// display work experience
displayWork();

function displayWork() {
    for (job in work.jobs)
    {
        $("#workExperience").append(HTMLworkStart);
        var formattedJobs = HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(HTMLworkImg.replace("%data%", work.jobs[job].img) + formattedJobs);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
};

//  display education
displaySchools();

function displaySchools() {
    for (onlineCourse in education.onlineCourses)
    {
        $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
        $(".education-entry:last").append(HTMLonlineImage.replace("%data%", education.onlineCourses[onlineCourse].image) + formattedSchool);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
        $(".education-entry:last").append(HTMLonlineDescription.replace("%data%", education.onlineCourses[onlineCourse].description));
        $(".education-entry:last").append(HTMLonlineURL.replace(/(%data%)/gm, education.onlineCourses[onlineCourse].url));
    }
    for (school in education.schools)
    {
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
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
    var plength = projects.projects.length;

    for (var i = plength - 1; i >= 0; i--)
    {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images) + HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        /*$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));*/
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        $(".project-entry:last").append(HTMLprojectUrl.replace(/(%data%)/gm, projects.projects[i].url));
    }
}

projects.display();

// add map
/*$("#mapDiv").append(googleMap);*/

// internationalize change with switch at start of file
// $("#main").append(internationalizeButton);

$('.accordion-body').on('shown.bs.collapse', function() {
    var selected = $(this);
    var collapseHeight = $('.collapse.in').height();
    $.scrollTo(selected, 500, {
        offset: -(collapseHeight)
    });
});