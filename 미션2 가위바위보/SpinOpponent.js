import Item from "./models/Item.js";

const rock = new Item("rock", "assets/rock.png");
const scissors = new Item("scissors", "assets/scissors.png");
const paper = new Item("paper", "assets/paper.png");

const items = [rock, scissors, paper];

class SpinOpponent {
  constructor() {
    this.opponentImage = document.querySelector(".opponent img");
    this.interval = null;
  }

  start() {
    this.clear()
    let count = 0
    this.interval = setInterval(() => {
      this.opponentImage.src = items[count % 3].image;
      this.opponentImage.alt = items[count % 3].name;
      count++;
      if (count == 50) {
        clearInterval(this.interval);
      }
    }, 100);
  }

  clear() {
    if (this.interval) {
      clearInterval(this.interval);
      console.log('clear')
    }
  }
}

export default SpinOpponent;
