let questions = [
    {
        "question" : "Welches HTML-Tag wird verwendet, um ein externes JavaScript einzubinden?",
        "answer_1" : "\< javascript \>",
        "answer_2" : "\< js \>",
        "answer_3" : "\< script \>",
        "answer_4" : "\< link \>",
        "rightAnswer" : 3
    },
    {
        "question" : "Welches CSS-Attribut wird verwendet, um den Abstand außerhalb eines Elements festzulegen?",
        "answer_1" : "padding",
        "answer_2" : "spacing",
        "answer_3" : "margin",
        "answer_4" : "border",
        "rightAnswer" : 3
    },
    {
        "question" : "Welche HTTP-Methode wird im Frontend typischerweise für das Abrufen von Daten verwendet?",
        "answer_1" : "GET",
        "answer_2" : "POST",
        "answer_3" : "PUT",
        "answer_4" : "DELETE",
        "rightAnswer" : 1
    },
    {
        "question" : "Was macht die CSS-Eigenschaft display: flex;?",
        "answer_1" : "Richtet Texte zentriert aus",
        "answer_2" : "Aktiviert ein Layout-Modell zur flexiblen Anordnung von Elementen",
        "answer_3" : "Verhindert Umbrüche von Text",
        "answer_4" : "Blendet ein Element aus",
        "rightAnswer" : 2
    },
    {
        "question" : "Welche JavaScript-Methode wird genutzt, um ein Element anhand seiner ID auszuwählen?",
        "answer_1" : "document.querySelector()",
        "answer_2" : "document.getElementsByClassName()",
        "answer_3" : "document.getElementById()",
        "answer_4" : "document.getElementByTag()",
        "rightAnswer" : 3
    },
    {
        "question" : "Welche Dateiendung hat eine React-Komponente üblicherweise?",
        "answer_1" : ".jsx",
        "answer_2" : ".html",
        "answer_3" : ".rc",
        "answer_4" : ".ts",
        "rightAnswer" : 1
    }
];

function init() {
    document.getElementById("amountOfQuestions").innerHTML = questions.length;
    showQuestion();
}

let currentQuestion = 3;

function showQuestion() {
    let question = questions[currentQuestion];
    console.log(question);
    
    document.getElementById("questiontext").innerHTML = question['question'];
    document.getElementById("answer_1").innerHTML = question['answer_1'];
    document.getElementById("answer_2").innerHTML = question['answer_2'];
    document.getElementById("answer_3").innerHTML = question['answer_3'];
    document.getElementById("answer_4").innerHTML = question['answer_4'];
    document.getElementById("actualQuestion").innerHTML = currentQuestion + 1;
}
