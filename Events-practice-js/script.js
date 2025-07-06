const questions = [
    {
        question: "Как называется процесс, при котором растения используют солнечный свет для синтеза органических веществ?",
        answers: [
            { text: "Свет", correct: false },
            { text: "Синтезфото", correct: false },
            { text: "Фотосинтез", correct: true },
            { text: "Некроз", correct: false },
        ]
    },
    {
        question: "Какая часть клетки отвечает за хранение генетической информации?",
        answers: [
            { text: "Ведро", correct: false },
            { text: "Ядро", correct: true },
            { text: "Анакод", correct:  false},
            { text: "Яйцо", correct: false },
        ]
    },
    {
        question: "Какой орган человеческого тела является самым большим по площади?",
        answers: [
            { text: "Руки", correct: false },
            { text: "Ноги", correct: false },
            { text: "Кожа", correct: true },
            { text: "Туловище", correct: false },
        ]
    },
    {
        question: "Как называется симбиотическое сосуществование грибов и корней растений?",
        answers: [
            { text: "Микориза", correct: true },
            { text: "Мимоза", correct: false },
            { text: "Астроза", correct: false },
            { text: "Куроза", correct: false },
        ]
    },
    {
        question: "Какое животное самое большое в мире? (напишите ответ)",
        type: "text",
        correctAnswer: "кит"
    }
];

const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("quiz-container");
const startButton = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;


startButton.addEventListener("click", startQuiz);

function startQuiz() {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Следующий вопрос";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    if (currentQuestion.type === "text") {

        const input = document.createElement("input");
        input.type = "text";
        input.id = "text-answer";
        input.placeholder = "Введите ваш ответ здесь...";
        input.classList.add("text-input");
        
        const submitBtn = document.createElement("button");
        submitBtn.innerHTML = "Подтвердить";
        submitBtn.classList.add("btn");
        submitBtn.id = "submit-text";
        
        answerButtons.appendChild(input);
        answerButtons.appendChild(submitBtn);
        
        submitBtn.addEventListener("click", checkTextAnswer);
    } else {
        
        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", checkAnswer);
        });
    }
}

function checkTextAnswer() {
    const input = document.getElementById("text-answer");
    const userAnswer = input.value.trim();
    const correctAnswer = questions[currentQuestionIndex].correctAnswer.toLowerCase();
    
    const resultElement = document.createElement("div");
    resultElement.classList.add("result-text");
    
    if (userAnswer.toLowerCase() === correctAnswer) {
        resultElement.textContent = "Правильно!";
        resultElement.style.color = "green";
        score++;
    } else {
        resultElement.textContent = `Неверно! Правильный ответ: ${correctAnswer}`;
        resultElement.style.color = "red";
    }
    
    answerButtons.appendChild(resultElement);
    document.getElementById("submit-text").disabled = true;
    input.disabled = true;
    nextButton.style.display = "block";
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function checkAnswer(e) {
    if (questions[currentQuestionIndex].type === "text") {
        checkTextAnswer();
    } else {
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if (isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        } else {
            selectedBtn.classList.add("incorrect");
        }

        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled = true;
        });
        nextButton.style.display = "block";
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Ты ответил на ${score} из ${questions.length}!`;
    nextButton.innerHTML = "Начать сначала";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
});


