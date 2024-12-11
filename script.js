function createQuiz() {
    submitButton.innerText = "Next"

    questionHeading.innerText = `Question No. ${quesNo + 1} of ${quizQuestions.length} `
    question.innerText = `${quizQuestions[quesNo].question}`
    optiona.value = `${quizQuestions[quesNo].optiona}`
    optionb.value = `${quizQuestions[quesNo].optionb}`
    optionc.value = `${quizQuestions[quesNo].optionc}`
    optiond.value = `${quizQuestions[quesNo].optiond}`
    optionaLabel.innerText = `a:${quizQuestions[quesNo].optiona}`
    optionbLabel.innerText = `b:${quizQuestions[quesNo].optionb}`
    optioncLabel.innerText = `c:${quizQuestions[quesNo].optionc}`
    optiondLabel.innerText = `d:${quizQuestions[quesNo].optiond}`
    if (quesNo == quizQuestions.length - 1) {
        submitButton.innerText = "Submit"
    }
}

submitButton.addEventListener("click", () => {
    if (submitButton.innerText == "Submit") {
        updateAnswers()
        submitButton.disabled = true
        return checkResult()
    }
    if (quesNo + 1 < quizQuestions.length) {
        updateAnswers()
        quesNo++
        createQuiz()
    }
})
function checkResult() {
    let currentScore = 0
    for (let i = 0; i < actualAnswers.length; i++) {
        if (selectedAnswers[i] == actualAnswers[i]) {
            currentScore++;
        }
    }
    quizContainer.style.display = "none"
    container.innerHTML = `
    <h1>You scored: ${currentScore} / ${quizQuestions.length}</h1>
    <button><a href='/' class="home">Home</a></button>
    `
    console.log(`You scored: ${currentScore} / ${quizQuestions.length}`)
    console.log(actualAnswers);
    console.log(selectedAnswers);

}
function updateAnswers() {
    let options = document.querySelectorAll(".options")
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            options[i].checked = false
            selectedAnswers.push(options[i].value)

            return
        }
    }
}


createQuiz()

