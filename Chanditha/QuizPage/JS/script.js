// Data structure that stores the questions for the quiz

let questions = [
    {
    numb: 1,
    question: "In which year did the game Fallout 3 release?",
    answer: "2008",
    options: [
      "2006",
      "2007",
      "2008",
      "2009"
    ]
  },
    {
      numb: 2,
      question: "Who is the protagonist of the God of War Series?",
      answer: "Kratos",
      options: [
        "Kratos",
        "Deimos",
        "Ares",
        "Tyr"
      ]
  },
    {
    numb: 3,
    question: "Which of these anime franchises has the game Fortnite never crossed over with?",
    answer: "Bleach",
    options: [
      "Naruto",
      "Attack on Titan",
      "Dragonball",
      "Bleach"
    ]
  },
    {
    numb: 4,
    question: "Which of these is the most awarded game of all time?",
    answer: "The Last of Us: Part II",
    options: [
      "The Elder Scrolls V: Skyrim",
      "The Witcher 3: Wild Hunt",
      "Red Dead Redemption 2",
      "The Last of Us: Part II"
    ]
  },
    {
    numb: 5,
    question: "Which of these games is credited as the starter of the First Person Shooter Genre?",
    answer: "Wolfenstein 3D",
    options: [
      "DOOM",
      "Halo",
      "Wolfenstein 3D",
      "Half-Life"
    ]
  },
  {
    numb: 6,
    question: "The violent fighting game series that was responsible for the ESRB Age Rating system was: ",
    answer: "Mortal Kombat",
    options: [
      "Mortal Kombat",
      "Street Fighter",
      "Virtua Fighter",
      "Bloody Roar"
    ]
  },
    {
    numb: 7,
    question: "Which of these game series was not adapted from a novel?",
    answer: "Nioh",
    options: [
      "S.T.A.L.K.E.R.",
      "Metro",
      "Nioh",
      "The Witcher"
    ]
  },
    {
    numb: 8,
    question: "Which of these games was made in the Assembly Programming Language by a single person?",
    answer: "Rollercoaster Tycoon",
    options: [
      "Undertale",
      "Rollercoaster Tycoon",
      "Deltarune",
      "Cities: Skylines"
    ]
  },
    {
    numb: 9,
    question: "Who is the rival of the protagonist of the Devil May Cry series, Dante?",
    answer: "Vergil",
    options: [
      "Vante",
      "Vergillia",
      "Virgilius",
      "Vergil"
    ]
  },
    {
    numb: 10,
    question: "FromSoftware, a game developer known for their highly difficult video games, was not responsible for the development of: ",
    answer: "Monster Hunter",
    options: [
      "Monster Hunter",
      "Elden Ring",
      "King's Field",
      "Dark Souls"
    ]
  },
]

// Question information is gathered

const question = document.querySelector(".quiz-question-text");
const questionNumber = document.querySelectorAll(".questions-remaining");

// Answer information is gathered

let answer_container = document.querySelector(".quiz-answers-container");
let answers = document.querySelectorAll(".answer-option");

// Button information is gathered

let next_button = document.getElementById("next-btn");
let start_button = document.getElementById("start-btn");
let rstrt_button = document.getElementById("rstrt-btn");

// The container information is gathered to toggle the sections on or off

let info_container = document.getElementById("info-sheet");
let quiz_container = document.querySelector(".quiz-section");

let perf_container = document.getElementById("perf-sheet");

let qCounter = 1;
let correctAnswer = 0;

let timerTime = document.getElementById("time-displayed");
let quiz_time_taken = document.querySelector(".quiz-time-taken");

let score = document.getElementById("score");
let award = document.getElementById("award");

// both functions are called at the start with index 0 to begin the quiz

showQuestion(0)
calculateAnswer(0)

// When the next button is clicked

next_button.addEventListener("click", function() {

   if (qCounter < 10) {

    // If we are in the final question, the button text is changed to Finish quiz

       if (qCounter === 9) {
           next_button.innerText = "Finish Quiz"
       }
       nextQuestion();
   } else {

    //When the quiz is over, the quiz container is hidden and the perf container is shown

       quiz_container.classList.add("hide");
       perf_container.classList.remove("hide");

       score.innerText = correctAnswer + " out of 10"

       quiz_time_taken.innerText = 60 - count;

       if (correctAnswer > 5) {

       score.style.color = "#01301A";
       award.innerText = "You are an adept Gamer."
       
   } else {

       score.style.color = "#940000";
       award.innerText = "You are a novice Gamer."

       }

   }

}, false);

// When the start button is clicked

start_button.addEventListener("click", function() {


  // The info container is hidden and the quiz container is shown

   info_container.classList.add("hide");
   quiz_container.classList.remove("hide");

  //  The timer is started

   count = 59;
   const interval = setInterval(function() {;

       if (count > -1) {

       timerTime.innerText = count;
       count--;

       } else {

      // if the timer runs out

       quiz_container.classList.add("hide");
       perf_container.classList.remove("hide");

       score.innerText = correctAnswer + " out of 10"

       if (correctAnswer > 5) {

       score.style.color = "#01301A";

       } else {

       score.style.color = "#940000";

       }

       }

   }, 1000);

   if (qCounter === 10) {

       clearInterval(interval);

   }

}, false);

// When the restart button is clicked, the page is reloaded

rstrt_button.addEventListener("click", function() {

   window.location.reload();

}, false);

// The next question is displayed

function nextQuestion() {

   for (let index = 0; index < answers.length; index++) {
       answers[index].classList.remove("correct");
       answers[index].classList.remove("wrong");
       answer_container.classList.remove("answered");
   }

   showQuestion(qCounter)
   calculateAnswer(qCounter)

   qCounter++;

}

function calculateAnswer(question) {

   for (let index = 0; index < answers.length; index++) {
       answers[index].addEventListener("click", function() {
           answerSelected(answers[index], question);
       }, false);
   }

}

// Function that checks if the clicked answer is the correct one

function answerSelected(answer, question) {
   
   if (answer.innerText === questions[question].answer) {

       correctAnswer += 1;
       answer.classList.remove("wrong");
       answer.classList.add("correct");
       answer_container.classList.add("answered");

   }

   else {

       answer.classList.add("wrong");

       for (let index = 0; index < answers.length; index++) {

           if (answers[index].innerText === questions[question].answer) {

            answers[index].classList.add("correct");
            answer_container.classList.add("answered");

           }

       }

   }

}

// Function that shows the question and answers

function showQuestion(i) {

for (let index = 0; index < 2; index++) {
  
  questionNumber[index].innerText = questions[i].numb;
  
}

question.innerText = ". " + questions[i].question;

for (let index = 0; index < 4; index++) {
   answers[index].innerText = questions[i].options[index]
}

}
