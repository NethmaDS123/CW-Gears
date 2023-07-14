let j = 0;

let imageContainer = document.querySelector(".splash-container");

let splashText = document.createElement("img");
splashText.src = "Assets/textLogo.png";
splashText.classList.add("text-logo");

const splashInterval = setInterval(() => {

    j++;

    if (j == 1) {

        clearInterval(splashInterval);
        imageContainer.classList.add("aside");
        imageContainer.appendChild(splashText);

    }

}, 1000);

let k = 0;

let creditsContainer = document.querySelector(".credits-container");

//Splash Screen Animation
const textInterval = setInterval(() => {
    
    k++;

    if (k == 1) {

        clearInterval(textInterval);
        creditsContainer.style.visibility = "visible";
        creditsContainer.classList.add("appear");

    }

}, 2000);

let l = 0;

//Main page redirect transition
const pageInterval = setInterval(() => {
    
    l++;

    if (l == 1) {

        window.location.href = "../../Nethma/MainPage/MainPage.html";
        clearInterval(pageInterval);

    }

}, 4000);