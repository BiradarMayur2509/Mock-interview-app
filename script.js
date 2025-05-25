// Sample interview questions
const questions = [
  "Tell me about yourself.",
  "What are your strengths and weaknesses?",
  "Why do you want this job?",
  "Describe a challenging situation and how you overcame it.",
  "Where do you see yourself in 5 years?"
];

// Variables to track state
let currentQuestionIndex = 0;
let answers = new Array(questions.length).fill("");

// Load first question
window.onload = () => {
  const saveAnswer = localStorage.getItem("interviewAnswers")

  if(savedAnswer) {
    answers = JSON.parse(savedAnswer);
  }
  loadQuestion();
};

function loadQuestion() {
  const questionText = document.getElementById("question-text");
  const answerBox = document.getElementById("answer");

  questionText.textContent = questions[currentQuestionIndex];
  answerBox.value = answers[currentQuestionIndex];
}

function nextQuestion() {
  saveAnswer();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  }
}

function prevQuestion() {
  saveAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function saveAnswer() {
  const answerBox = document.getElementById("answer");
  answers[currentQuestionIndex] = answerBox.value;

  // save all answers to localstorage 
  localStorage.setItem("interviewAnswers", JSON.stringify(answers));
}

function submitInterview() {
  saveAnswer();
  
  // hide question and buttons 
  document.getElementById("question-box").style.display = "none";
  document.querySelector(".btn-group").style.display = "none";

  // show result box
  const resultBox = document.getElementById("result-box");
  const results = document.getElementById("results");

  resultBox.style.display = "block";
  results.innerHTML = ""; // Clear previous if any


   questions.forEach((q, i) => {
    const qDiv = document.createElement("div");
    qDiv.innerHTML = `<p><strong>Q${i + 1}:</strong> ${q}</p>
                      <p><strong>Your Answer:</strong> ${answers[i] || "No answer given."}</p>
                      <hr/>`;
    results.appendChild(qDiv);
  });
}
