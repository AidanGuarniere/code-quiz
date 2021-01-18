// global variables
let answerEL = document.getElementById('answers');
let scoreEl = document.getElementById('results');
let questionEl = document.getElementById('question');

let timeLeft = 60;

const questionsArr = [
  { question: "What is 1 + 1?", answers: ["1", "11", "2", "0"],  answercheck: 2 },
  { question: "What CSS primarily used for?", answers: ["Creating front-end logic", "Website framework", "Styling HTML pages", "Creating and parsing databases"], answercheck: "Styling HTML pages" },
  { question: "When was JavaScript created", answers: [1999, 2005, 2006, 1995 ], answercheck: 1995 },
  { question: "What does the R in D.R.Y Code stand for?", answers: ["Repair", "Replace", "Repeat", "Release"], answercheck: "Repeat" },
  { question: "What is an HTML file often referred to a in JavaScript", answers: ["HTML", "DOM", "PHP", "window"], answercheck: "DOM" },
];

let questionNumber = 0;
//questions
var body = document.body;

var h1El = document.createElement("h1");
h1El.textContent = questions[i].question;
h1El.setAttribute("style", "text-align: center");
body.appendChild(h1El);

//list container
var divEl = document.createElement("div");
divEl.setAttribute("style", "margin-left: 40%; ");
body.appendChild(divEl);

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array.length; i++) {
  document.getElementById("root").innerHTML += `
<div>
<button id = ${array[i]} "btn" class = "btn" > BUTTON ${array[i]}</button>
<span>0</span>
</div>`;
}

answers;

var button1 = document.createElement("button");
button1.textContent = questions[i].answer[0];
button1.setAttribute("style", "display: block; width:100px");
divEl.appendChild(button1);

var button2 = document.createElement("button");
button2.textContent = questions[i].answer[1];
button2.setAttribute("style", "display: block; width:100px");
divEl.appendChild(button2);

var button3 = document.createElement("button");
button3.textContent = questions[i].answer[2];
button3.setAttribute("style", "display: block; width:100px");
divEl.appendChild(button3);

var button4 = document.createElement("button");
button4.textContent = questions[i].answer[3];
button4.setAttribute("style", "display: block; width:100px");
divEl.appendChild(button4);

// when answer is clicked do something

button1.addEventListener("click", function () {
  if (i < questions.length) {
    i++;
    //new question
    h1El.textContent = questions[i].question;
    button1.textContent = questions[1].answer[0];
    button2.textContent = questions[1].answer[1];
    button3.textContent = questions[1].answer[2];
    button4.textContent = questions[1].answer[3];
  }
  console.log(i);
});

button2.addEventListener("click", function () {
  if (i < questions.length) {
    i++;
    //new question
    h1El.textContent = questions[i].question;
    button1.textContent = questions[2].answer[0];
    button2.textContent = questions[2].answer[1];
    button3.textContent = questions[2].answer[2];
    button4.textContent = questions[2].answer[3];
  }
  console.log(i);
});

button3.addEventListener("click", function () {
  if (i < questions.length) {
    i++;
    //new question
    h1El.textContent = questions[i].question;
    button1.textContent = questions[3].answer[0];
    button2.textContent = questions[3].answer[1];
    button3.textContent = questions[3].answer[2];
    button4.textContent = questions[3].answer[3];
  }
  console.log(i);
});

button4.addEventListener("click", function () {
  if (i < questions.length) {
    i++;
    //new question
    h1El.textContent = questions[i].question;
    button1.textContent = questions[4].answer[0];
    button2.textContent = questions[4].answer[1];
    button3.textContent = questions[4].answer[2];
    button4.textContent = questions[4].answer[3];
  }
  console.log(i);
});

// unordered list
var ulEl = document.createElement("ul");
ulEl.setAttribute("style", "list-style: none;");
divEl.appendChild(ulEl);

//list items
var listEl0 = document.createElement("li");
listEl0.textContent = [questions[i].answer[0]];

var listEl1 = document.createElement("li");
listEl1.textContent = [questions[i].answer[1]];
ulEl.appendChild(listEl1);

var listEl2 = document.createElement("li");
listEl2.textContent = [questions[i].answer[2]];
ulEl.appendChild(listEl2);

var listEl3 = document.createElement("li");
listEl3.textContent = [questions[i].answer[3]];
ulEl.appendChild(listEl3);

for (var i = 0; i < questions.length; i++) {
  //list items
  var item = questions[i].answer[i];
  var listEl = document.createElement("li");
  ulEl.appendChild(listEl);
  listEl.textContent = [questions[i].answer[0]];
  ulEl.appendChild(listEl);
}
