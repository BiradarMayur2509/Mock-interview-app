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
}

function submitInterview() {
  saveAnswer();
  console.log("Interview submitted!");
  console.log("Your Answers:");
  questions.forEach((q, i) => {
    console.log(`${i + 1}. ${q}`);
    console.log(`Answer: ${answers[i]}\n`);
  });
  alert("Thank you! Your interview has been submitted.");
}
