/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var bio ={
    "name" : "Rushi Dave",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "226-450-0997",
        "email" : "rushijdave96@gmail.com",
        "GitHub" : "rushidave",
        "location" : "Waterloo, Ontario"
    },
    "Welcome Message" : "Welcome to my interactive resume!",
    "skills" : [
                    {
                        "logo" : "./images/csharp.png",
                        "rating" : "./images/4stars2.png",
                    },
                    {
                        "logo" : "./images/c++.jpg",
                        "rating" : "./images/4stars2.png",
                    },
                    {
                        "logo" : "./images/html.png",
                        "rating" : "./images/5star.png",
                    },
                    {
                        "logo" : "./images/css.png",
                        "rating" : "./images/5star.png",
                    },
                    {
                        "logo" : "./images/jscript.png",
                        "rating" : "./images/4stars2.png",
                    },
                    {
                        "logo" : "./images/php.png",
                        "rating" : "./images/2stars1.png",
                    },
                    {
                        "logo" : "./images/mysql.png",
                        "rating" : "./images/3stars1.png",
                    },
                    {
                        "logo" : "./images/json.png",
                        "rating" : "./images/5star.png",
                    },
                    {
                        "logo" : "./images/bootstrap1.png",
                        "rating" : "./images/4stars2.png",
                    },
                    {
                        "logo" : "./images/wordpress.png",
                        "rating" : "./images/4stars2.png",
                    }
                ]
    //"biopic" : "images/fry.jpg"
 }

 var education ={
    "schools" : [
        {
            "name" : "Brantford Collegiate Institute",
            "City" : "Brantford",
            "degree" : "Diploma",
            "Dates" : "2013"
        },
        {
            "name" : "University of Waterloo",
            "City" : "Waterloo",
            "degree" : "Honours Electrical Engineer",
            "Dates" : "2020"
        }
    ],

    "online courses" : [
        {
            "title" : "Javascript Crash Course",
            "school" : "Udadcity",
            "dates" : "2016"
        }
    ]
 }

 var work ={
    "jobs" : [
    {
        "employer"   : "Tesla",
        "title" : "Electrical Engineer",
        "description" : "dfjhsdjfhsdfkhsd sfhdsjfhsjfhjfhsjfh jsfhsdkjfsjkf sjhfjshfjshjfs jdfhsfsjfhsk "
    }

    ]
 }


var projects ={
    "projects" : [
        {
            "title" : "Project 1",
            "dates" : "2016",
            "description" : "fsjsdjf jdfhsdj sdfjhsfhsdjkfhsdjf sjkfhsjfhs fhjsdfs ",
            "images" : [
             "https://www.cs.uoregon.edu/groups/webdev/images/web_dev.png",
             "http://www.webdev.it/img/logo.png"
             ]
        }
    ]
}

function displaySkills (){
        for (skill in bio.skills){
        $("#skills").append(HTMLskillsStart);
        var formatteddImage = HTMLskillsImage.replace("%data%",bio.skills[skill].logo);
        console.log(formatteddImage);
        var formattedRatings = HTMLskillsRatings.replace("%data%",bio.skills[skill].rating);
        console.log(formattedRatings);
        var skillsInfo = formatteddImage + formattedRatings;
        $(".skills-entry:last").append(skillsInfo);
    }
}

function displayEducation (){
    for (school in education.schools){
        $("#education").append(HTMLschoolStart);
        var schoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
        var schoolcity = HTMLschoolLocation.replace("%data%", education.schools[school].City);
        var schooldegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var schooldates = HTMLschoolDates.replace("%data%", education.schools[school].Dates);
        var edinfo = schoolname+schoolcity+schooldegree+schooldates;
        $(".education-entry:last").append(edinfo);
    }
}

projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDesciption = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDesciption);

        if (projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                  var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                  $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

displaySkills();
/*projects.display();*/
displayEducation();
$("#mapDiv").append(googleMap);





