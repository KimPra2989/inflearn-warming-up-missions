const count = document.getElementById("count");
const debounceCount = document.getElementById("debounce-count");
const throttleCount = document.getElementById("throttle-count");

const Delay = 250;

//스크롤 이벤트
window.addEventListener("scroll", (e) => {
  eventHandler()
});

//클릭 이벤트
const button = document.getElementById("btn");
button.addEventListener("click", () => {
  eventHandler()
});

function eventHandler() {
  counting(count);
  debounce(counting, Delay);
  throttle(counting, Delay);
}

function counting(element) {
  element.textContent++;
}

//debounce
let timer;

function debounce(fn, delay) {
  clearTimeout(timer);

  timer = setTimeout(() => {
    fn(debounceCount);
  }, delay);
}

//throttle
let first = true;

function throttle(fn, delay) {
  if (first) {
    first = false;
    setTimeout(() => {
      fn(throttleCount);
      first = true;
    }, delay);
  }
}