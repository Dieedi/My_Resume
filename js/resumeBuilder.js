// functions to display resume. Variables in json.js

// display main header
$("#header").prepend(HTMLbioPic.replace("%data%", bio.bioPic));
$("#header").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
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
        $(".education-entry").append(HTMLonlineURL.replace(/(%data%)/gm, education.onlineCourses[onlineCourse].url));
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
