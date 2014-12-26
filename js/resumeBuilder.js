// functions to display resume. Variables in json.js

// display main header
$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
// $("#header").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
$("#header").prepend(HTMLemail.replace("%data%", bio.contacts.email));
$("#header").prepend(HTMLgithub.replace("%data%", bio.contacts.github));

// change button for language switch
if (userLang === "fr")
{
    $("#header").prepend(HTMLheaderBtn.replace("%data%", "uk"));
}
else
{
    $("#header").prepend(HTMLheaderBtn.replace("%data%", "fr"));
}

$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.fullname));

// change titles
if (userLang === "fr")
{
    // switching fr/en Titles
    $("#workExperience").html("<h2>Expérience</h2>");
    $("#projects").html("<h2>Projets</h2>");
    $("#education").html("<h2>Formation</h2>");
    $("#mapDiv").html("<h2>Où j'ai vécu et travaillé</h2>");
}

// display skills
if (bio.skills !== null)
{
    $("#header").append(HTMLskillsStart);
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
        $(".work-entry:last").append(formattedJobs);
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
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title));
        $(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace(/(%data%)/gm, education.onlineCourses[onlineCourse].url));
    }
    for (school in education.schools)
    {        
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

// internationalize change with switch at start of file
// $("#main").append(internationalizeButton);
