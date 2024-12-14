let questionHeading = document.querySelector(".question-no")
let question = document.querySelector(".question")
let optiona = document.querySelector(".optiona")
let optionb = document.querySelector(".optionb")
let optionc = document.querySelector(".optionc")
let optiond = document.querySelector(".optiond")
let optionaLabel = document.querySelector('.optiona-label')
let optionbLabel = document.querySelector('.optionb-label')
let optioncLabel = document.querySelector('.optionc-label')
let optiondLabel = document.querySelector('.optiond-label')
let submitButton = document.querySelector('.submit')
let options = document.querySelectorAll(".options")
let quizContainer = document.querySelector(".quiz")
let container = document.querySelector(".container")
// const actualAnswers = ['Islamabad', 'Lahore', 'Peshawar', 'Karachi', 'Quetta']
// const selectedAnswers = []
// let quesNo = 0

quizQuestions = [];
let selectedAnswers = [];
let actualAnswers = [];
let quesNo = 0;

async function fetchQuestions() {
    try {
        const response = await fetch('https://quiz-app-one-bice.vercel.app/api/questions');
        const questions = await response.json();
        quizQuestions = questions;
        actualAnswers = questions.map(q => q.correctAnswer);
        createQuiz();
    } catch (error) {
        console.error("Failed to fetch questions:", error);
    }
}

fetchQuestions();
