// These tags are the hidden ones when the page is loaded
let hiddenTagsStudentOne = document.querySelectorAll(".student-one");
let hiddenTagsStudentTwo = document.querySelectorAll(".student-two");
let hiddenTagsStudentThree = document.querySelectorAll(".student-three");
let hiddenTagsStudentFour = document.querySelectorAll(".student-four");

// The variables that stores the images that will be hovered over
let imageStudentOne = document.querySelector("#std-one")
let imageStudentTwo = document.querySelector("#std-two")
let imageStudentThree = document.querySelector("#std-three")
let imageStudentFour = document.querySelector("#std-four")

// Empty Div in HTML will be toggled by being assigned to this variable
let emptyDiv = document.querySelector(".empty-div");

// When the mouse is over an image, each of the hidden tags for this student is removed and the empty div is hidden
imageStudentOne.addEventListener("mouseover", function() {
    hiddenTagsStudentOne.forEach(element => {
        element.classList.remove("hide");
        element.classList.add("person-name");
        emptyDiv.classList.add("hide");
    });
 }, false);

 // When the mouse leaves an image, all of the hidden tags are rehidden and empty div is shown again
 imageStudentOne.addEventListener("mouseout", function() {
    hiddenTagsStudentOne.forEach(element => {
        element.classList.add("hide");
        element.classList.remove("person-name");
        emptyDiv.classList.remove("hide");
    });
 }, false);

 imageStudentTwo.addEventListener("mouseover", function() {
    hiddenTagsStudentTwo.forEach(element => {
        element.classList.remove("hide");
        element.classList.add("person-name");
        emptyDiv.classList.add("hide");
    });
 }, false);

 imageStudentTwo.addEventListener("mouseout", function() {
    hiddenTagsStudentTwo.forEach(element => {
        element.classList.add("hide");
        emptyDiv.classList.remove("hide");
        element.classList.remove("person-name");
    });
 }, false);

 imageStudentThree.addEventListener("mouseover", function() {
    hiddenTagsStudentThree.forEach(element => {
        element.classList.remove("hide");
        element.classList.add("person-name");
        emptyDiv.classList.add("hide");
    });
 }, false);

 imageStudentThree.addEventListener("mouseout", function() {
    hiddenTagsStudentThree.forEach(element => {
        element.classList.add("hide");
        emptyDiv.classList.remove("hide");
        element.classList.remove("person-name");
    });
 }, false);

 imageStudentFour.addEventListener("mouseover", function() {
    hiddenTagsStudentFour.forEach(element => {
        element.classList.remove("hide");
        element.classList.add("person-name");
        emptyDiv.classList.add("hide");
    });
 }, false);

 imageStudentFour.addEventListener("mouseout", function() {
    hiddenTagsStudentFour.forEach(element => {
        element.classList.add("hide");
        emptyDiv.classList.remove("hide");
        element.classList.remove("person-name");
    });
 }, false);