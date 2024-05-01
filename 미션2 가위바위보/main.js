import CountDown from "./CountDown.js";
import Item from "./models/Item.js";
import SpinOpponent from "./SpinOpponent.js";

const rock = new Item("rock", "assets/rock.png");
const scissors = new Item("scissors", "assets/scissors.png");
const paper = new Item("paper", "assets/paper.png");

const items = [rock, scissors, paper];

const countDown = new CountDown(5, gameStart)
const spinOpponent = new SpinOpponent()

let gameCount = 0


let startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", (e) => {
  startBtn.style.display = "none";
  document.querySelector('.result').style.display = 'block'


  countDown.show()
  
  gameStart()

  const userItems = document.querySelector(".user-items");

  const itemWrapper = document.createElement("div");
  itemWrapper.classList.add("user-wrapper");

  items.forEach((item) => {
    let userItemWrapper = document.createElement("div");
    userItemWrapper.classList.add("item-wrapper", "user-wrapper");
    userItemWrapper.setAttribute("name", item.name);
    userItemWrapper.addEventListener("click", (e) => {
      countDown.clear();
      spinOpponent.clear();
      showResult(e);
      setTimeout(()=> {
        gameStart()
      }, 1000)
    });

    userItemWrapper.style.backgroundImage = `url('${item.image}')`;

    userItems.append(userItemWrapper);
  });
});

function gameStart() {
  gameCount++
  if (gameCount > 5) {
    countDown.clear();
    spinOpponent.clear();
    showPopup()
    return
  }
  countDown.start()
  spinOpponent.start()
}

function showPopup() {
  const dimmed = document.querySelector('.dimmed')
  dimmed.style.display = 'block'

  const title = document.querySelector('.final-title')
  title.innerHTML = '최종 점수'
  
  let userScore = document.getElementById("user-score").textContent
  let opponentScore = document.getElementById("opponent-score").textContent

  const score = document.querySelector('.final-score')
  score.innerHTML = `${userScore} : ${opponentScore}`

  const resultMessage = document.querySelector('.final-score-message')
  resultMessage.innerHTML = 
    userScore > opponentScore ? '승리' :
    userScore == opponentScore ? '무승부' : '패배'


  const restart = document.querySelector('.restart')
  restart.addEventListener('click', (e)=> {
    dimmed.style.display = 'none'
    document.getElementById("user-score").textContent = 0
    document.getElementById("opponent-score").textContent = 0
    gameCount = 0
    gameStart()
  })

}


let timeout = null;

function showResult(e) {
  const opponent = setOpponent();
  console.log("opp", opponent.name);
  let opponentImage = document.querySelector(".opponent img");
  // console.log(opponentImage);
  opponentImage.src = opponent.image;
  opponentImage.alt = opponent.name;
  //   console.log(opponent)
  let user = e.currentTarget.getAttribute("name");
  let resultMessage = document.querySelector("#result-message");
  resultMessage.style.display = "inline";

  //timeout 전역에 선언됨
  if (timeout) {
    clearTimeout(timeout);
  }
  timeout = setTimeout(() => {
    resultMessage.style.display = "none";
  }, 1000);

  const userScore = document.getElementById("user-score");
  const opponentScore = document.getElementById("opponent-score");

  if (opponent.name == user) {
    resultMessage.innerHTML = "비김";
    return;
  } else {
    if (user == "rock") {
      if (opponent.name == "scissors") {
        resultMessage.innerHTML = "이김";
        userScore.innerHTML++;
      } else {
        resultMessage.innerHTML = "짐";
        opponentScore.innerHTML++;
      }
    }

    if (user == "scissors") {
      if (opponent.name == "paper") {
        resultMessage.innerHTML = "이김";
        userScore.innerHTML++;
      } else {
        resultMessage.innerHTML = "짐";
        opponentScore.innerHTML++;
      }
    }

    if (user == "paper") {
      if (opponent.name == "rock") {
        resultMessage.innerHTML = "이김";
        userScore.innerHTML++;
      } else {
        resultMessage.innerHTML = "짐";
        opponentScore.innerHTML++;
      }
    }
  }
}

function setOpponent() {
  let randomIdx = Math.floor(items.length * Math.random());
  return items[randomIdx];
}
