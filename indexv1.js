"use strict"; 
// wod picture to be changed weekly
let wod1 = 'week1.png';
let wod2 = 'week2.png';
let wod3 = 'week3.png';
let wod23 = 'week2-3.png';
let wod4 = 'week4.png';
let wod5 = 'week5.png';
let wod6 = 'week6.png';
let wod7 = 'week7.png';
let wod8 = 'week8.png';
let wod9 = 'week9.png';
let wod10 = 'week10.png'; 
let wod11 = 'week11.png';
let wod12 = 'week12.png';
//divs that get hidden with the exception of the workout div
let divs = [ '#about', '#basicStructure', '#cycleTestsDiv', '#contactDiv' ]

// this is the fucntionality for the mobile menu dropdown. 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
// end mobile drop down menu
$(document).ready(function(){
    //begin toggles for Class format
    // $("#workoutMenu").click(function(){
    //     $("#workout").toggle("slow");
    // }); 
    $("#whiteBoard").click(function(){
        $("#whiteBoardDiv").toggle(); 
    })
    $("#activation").click(function(){
        $("#activationDiv").toggle(); 
    })
    $("#generalWarmUp").click(function(){
        $("#generalWarmUpDiv").toggle(); 
    })
    $("#specificWarmUp").click(function () {
        $("#specificWarmUpDiv").toggle();
    })
    $("#wod").click(function () {
        $("#wodDiv").toggle();
    })
    $("#coolDown").click(function () {
        $("#coolDownDiv").toggle();
    })
    /// end toggles for Class format;
    //this is the global that updates with the wods
    $("#workout").prepend(
        `<img src="${wod5}"><img src="${wod6}"> `
    );
    //toggle for the about section
    $("#aboutToggle").click(function(){
        $("#about").toggle(); 
    })
    //hides all divs except the one clicked and the wod. 
    $("#aboutMenu").click(function(){
        hideDivs(); 
        $("#about").show(); 
    })
    $("#suggestedFormat").click(function() {
        hideDivs(); 
        $("#basicStructure").show();
    })
    $("#cycleTests").click(function() {
       hideDivs(); 
       $("#cycleTestsDiv").show(); 
    })
    $("#contact").click(function() {
        hideDivs();
        $('#contactDiv').show(); 
    })

})

function hideDivs(){
    for(let i = 0; i < divs.length; i++){
        $(divs[i]).hide();
    }
}