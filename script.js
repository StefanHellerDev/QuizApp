let questions = [
  {
    "question": "Welches HTML-Tag wird verwendet, um ein externes JavaScript einzubinden?",
    "answer_1": "< javascript >",
    "answer_2": "< js >",
    "answer_3": "< script >",
    "answer_4": "< link >",
    "rightAnswer": 3,
  },
  {
    "question": "Welches CSS-Attribut wird verwendet, um den Abstand außerhalb eines Elements festzulegen?",
    "answer_1": "padding",
    "answer_2": "spacing",
    "answer_3": "margin",
    "answer_4": "border",
    "rightAnswer": 3,
  },
  {
    "question": "Welche HTTP-Methode wird im Frontend typischerweise für das Abrufen von Daten verwendet?",
    "answer_1": "GET",
    "answer_2": "POST",
    "answer_3": "PUT",
    "answer_4": "DELETE",
    "rightAnswer": 1,
  },
  {
    "question": "Was macht die CSS-Eigenschaft display: flex;?",
    "answer_1": "Richtet Texte zentriert aus",
    "answer_2": "Aktiviert ein Layout-Modell zur flexiblen Anordnung von Elementen",
    "answer_3": "Verhindert Umbrüche von Text",
    "answer_4": "Blendet ein Element aus",
    "rightAnswer": 2,
  },
  {
    "question": "Welche JavaScript-Methode wird genutzt, um ein Element anhand seiner ID auszuwählen?",
    "answer_1": "document.querySelector()",
    "answer_2": "document.getElementsByClassName()",
    "answer_3": "document.getElementById()",
    "answer_4": "document.getElementByTag()",
    "rightAnswer": 3,
  },
  {
    "question": "Welche Dateiendung hat eine React-Komponente üblicherweise?",
    "answer_1": ".jsx",
    "answer_2": ".html",
    "answer_3": ".rc",
    "answer_4": ".ts",
    "rightAnswer": 1,
  },
];

function init() {
  document.getElementById("amountOfQuestions").innerHTML = questions.length;
  showQuestion();
}

let currentQuestion = 5;
let correctAnswers = 0;

function showQuestion() {
  if (currentQuestion == questions.length) {
    // console.log("Ende");
    document.getElementById("bodyQuizActive").classList.toggle("d_none");
    document.getElementById("bodyQuizInactive").classList.toggle("d_none");
    document.getElementById("header-image").setAttribute("src", "./assets/img/trophy.png");
    document.getElementById("trophyAmountOfQuestions").innerHTML = questions.length;
    document.getElementById("correctAnswers").innerHTML = correctAnswers;
  } else {
    //   console.log("Current question:", currentQuestion + 1);
    //   console.log("Right answer:", questions[currentQuestion].rightAnswer);

    let question = questions[currentQuestion];
    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
    document.getElementById("actual-question").innerHTML = currentQuestion + 1;
    let progress = 0;
    progress = currentQuestion / questions.length;
    console.log(progress);
    document.getElementById("progressBar").style.width = progress * 100 + "%";
    document.getElementById("progressBar").innerHTML = `${Math.round(progress * 100)} %`;
    document.getElementById("progress-bar").setAttribute("aria-valuenow", progress * 100);
  }
}

function checkAnswer(answer) {
  if (answer == "answer_" + questions[currentQuestion].rightAnswer) {
    // console.log("Richtig!");
    document.getElementById(answer).parentNode.classList.add("text-bg-success");
    correctAnswers++;
  } else {
    // console.log("Falsch!");
    document.getElementById(answer).parentNode.classList.add("text-bg-danger");
    document.getElementById("answer_" + questions[currentQuestion].rightAnswer).parentNode.classList.add("text-bg-success");
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  //   console.log(currentQuestion);
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  for (let index = 1; index < 5; index++) {
    document.getElementById("answer_" + index).parentNode.classList.remove("text-bg-success");
    document.getElementById("answer_" + index).parentNode.classList.remove("text-bg-danger");
    document.getElementById("next-button").disabled = true;
  }
}

function restartGame() {
  currentQuestion = 0;
  correctAnswers = 0;
  document.getElementById("bodyQuizActive").classList.toggle("d_none");
  document.getElementById("bodyQuizInactive").classList.toggle("d_none");
  document.getElementById("header-image").setAttribute("src", "./assets/img/abc.jpg");
  init();
}
