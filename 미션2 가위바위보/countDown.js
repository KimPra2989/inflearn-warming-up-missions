class CountDown {
  constructor(time = 5, gameStart) {
    this.timer = document.querySelector(".timer");
    this.resultMessage = document.querySelector("#result-message");
    this.time = time;
    this.interval = null;
    this.gameStart = gameStart;
  }

  show() {
    this.timer.style.display = "inline-block";
  }

  start() {
    this.clear();
    this.timer.classList.add("countDown");
    let time = this.time;
    this.timer.innerHTML = time;
    this.interval = setInterval(() => {
      // console.log(time)
      time--;
      this.timer.innerHTML = time;
      if (time === 0) {
        clearInterval(this.interval);

        document.getElementById("opponent-score").innerHTML++;
        this.resultMessage.style.display = "inline";
        this.resultMessage.innerHTML = `짐ㅋ`;
        this.timer.classList.remove("countDown");

        setTimeout(() => {
          this.resultMessage.style.display = "none";
          this.gameStart();
        }, 1000);
      }
    }, 1000);
  }

  clear() {
    if (this.interval) {
      clearInterval(this.interval);
      this.timer.classList.remove("countDown");
    }
  }
}

export default CountDown;
