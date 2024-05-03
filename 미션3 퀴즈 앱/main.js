import { data } from "./data/parsedData.js";

const options = document.querySelector(".options");
const gradeContainer = document.querySelector(".question div");
const nextBtn = document.querySelector(".next")

let quizNum = 0;
renderQuiz(quizNum);

options.addEventListener("click", (e) => {
  if (e.target.tagName != "LI") return;
  
  grading(e);
  nextBtn.style.display = 'block'
});

function grading(e) {
    if (e.target.dataset.option == data[quizNum].answer) {
      gradeContainer.classList.add("correct");
    } else {
      e.target.classList.add("selected");
      gradeContainer.classList.add("incorrect");
    }
    options.children[data[quizNum].answer].classList.add("answer");
  }


nextBtn.addEventListener("click", toNextQuestion)

function toNextQuestion() {
  // init
  nextBtn.style.display = 'none'
  for (let child of options.children) {
    child.classList.remove("answer", "selected");
  }
  gradeContainer.classList.remove("correct", "incorrect");

  quizNum++;
  quizNum %= data.length;
  renderQuiz(quizNum);
}

function renderQuiz(n) {
  const numbers = ["①", "②", "③", "④"];
  document.getElementById("question-num").textContent = n + 1;

  for (let i = 0; i < options.children.length; i++) {
    document.getElementById("question").textContent = data[n].question;
    options.children[i].innerHTML = numbers[i] + " " + data[n].options[i];
  }
}
