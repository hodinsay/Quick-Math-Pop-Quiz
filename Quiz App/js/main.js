const quizData = [
    {
        question: '25 + 67 =',
        a: '82',
        b: '92',
        c: '102',
        correct: 'b',
    }, 
    {
        question: '8 * 13 =',
        a: '104',
        b: '94',
        c: '21',
        correct: 'a',
    }, 
    {
        question: '42 / 3  =',
        a: '13',
        b: '21',
        c: '14',
        correct: 'c',
    }, 
    {
        question: '2 * 25 + (60/2) =',
        a: '110',
        b: '100',
        c: '80',
        correct: 'c',
    }, 
    {
        question: ' 6 + 6 * 2 - 6 =',
        a: '0',
        b: '12',
        c: '6',
        correct: 'b',
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {

            let speed = Math.floor(60 - time);

            let results = `You answered ${score}/${quizData.length} correctly in ${speed} seconds. Please refresh to try again.`;

            alert (results);
            return countdownEl = 0;
        }
    }
});

const startingMinute = 1;
let time = startingMinute * 60;

let countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minute = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds: seconds;

    countdownEl.innerHTML = `${minute}: ${seconds}`;
    time--;

    if (seconds === "0"+ 0 && minute === 0) {
        countdownEl = 0;
        return alert("Time is up! Please refresh page to retry!")
    } 
}