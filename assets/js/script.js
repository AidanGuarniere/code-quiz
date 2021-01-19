// global variables
let answerEl = document.getElementById("answers");
let scoreEl = document.getElementById("results");
let questionEl = document.getElementById("question");
let responseEl = document.getElementById("response");
let answer;

let timerEl = document.getElementById("set-timer");
let timeLeft = 60;

// array of questions and answers
const questionsArr = [
  // throw away question for counter
  {
    question: "What is 1 + 1?",
    answers: ["1", "11", "2", "0"],
    answerCheck: 2,
  },
  {
    question: "What CSS primarily used for?",
    answers: [
      "Creating front-end logic",
      "Website framework",
      "Styling HTML pages",
      "Creating and parsing databases",
    ],
    answerCheck: "Styling HTML pages",
  },
  {
    question: "When was JavaScript created",
    answers: [1999, 2005, 2006, "1995"],
    answerCheck: "1995",
  },
  {
    question: "What does the R in D.R.Y Code stand for?",
    answers: ["Repair", "Replace", "Repeat", "Release"],
    answerCheck: "Repeat",
  },
  {
    question: "What is an HTML file often referred to a in JavaScript",
    answers: ["HTML", "DOM", "PHP", "window"],
    answerCheck: "DOM",
  },
];

let questionNumber = 0;

//start questions function
const startQuiz = () => {
  document.getElementById("intro").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  startTimer();
  askQuestions();
};

// start timer
const startTimer = () => {
  let timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = "Time: " + timeLeft + " seconds remaining!";
    // when time runs out
    if (timeLeft === 0 || questionNumber == questionsArr.length) {
      clearInterval(timer);
      setTimeout(displayScore);
    }
  }, 1000);
};

// cycle question/answer choices
const askQuestions = () => {
  // count question
  questionNumber++;

  // display according to questionNumber
  questionEl.textContent = questionsArr[questionNumber].question;

  // set answer space blank with inner html
  answerEl.innerHTML = "";

  // display answers
  let answers = questionsArr[questionNumber].answers;

  // finds correct answer
  answer = questionsArr[questionNumber].answerCheck;

  // loop question/answer options
  for (let i = 0; i < answers.length; i++) {
    let answersCycle = document.createElement("button");
    answersCycle.textContent = answers[i];
    answerEl.appendChild(answersCycle);
  }
};

const hideResponse = () => {
  responseEl.style.display = "none";
};

const showResponse = () => {
  responseEl.removeAttribute("style");
};

const displayScore = () => {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");
  scoreEl.textContent = "Your Score: " + timeLeft;
};

// respond to answer choice
answerEl.addEventListener("click", (event) => {
  if (answer === event.target.textContent) {
    responseEl.textContent = "Correct!";
    setTimeout(hideResponse, 1000);
  } else {
    responseEl.textContent = "Incorrect :(";
    timeLeft = timeLeft - 10;
  }
  showResponse();
  askQuestions();
});

document.getElementById("start-button").addEventListener("click", startQuiz);
