function qs(selector, element = document) {
  return element.querySelector(selector);
}

const input = document.getElementById("text-input");

const target = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
dolore repudiandae molestias, optio repellat aut iure natus
aspernatur fuga ducimus sunt quasi, porro voluptas, qui perspiciatis
laudantium alias hic! Doloremque.`;

const quote = [];
for (let char of target) {
  quote.push(`<span>${char}</span>`);
}
qs(".quote").innerHTML = quote.join("");

//타이핑 창 폭
const containerWidth = parseInt(getComputedStyle(qs(".quote-container")).width);
console.log("containerWidth", containerWidth);

// 줄마다 가장 먼저오는 단어 찾아옴
const x = document.querySelector(".quote").children;
lastWords = [];
let lineWidth = 0;
for (let i = 0; i < x.length; i++) {
  let wordWidth = 0;
  let word = "";
  while (x[i].textContent != ' ') {
    wordWidth += x[i].getBoundingClientRect().width;
    word += x[i].textContent;
    i++;
    if (i == x.length) break
  }

  if (lineWidth + wordWidth >= containerWidth) {
    lastWords.push(word);
    lineWidth = wordWidth;
  } else {
    lineWidth += wordWidth;
  }
}

console.log("x", x);
console.log(lastWords);


let idx = -1;
window.addEventListener("keydown", (e) => {
  if (e.key == "Shift") return;

  e.key != "Backspace" ? idx++ : idx > 0 ? idx-- : null;

  let correct;
  e.key == target[idx] ? (correct = true) : (correct = false);

  //   console.log(correct);

  console.log(e.key);
  // console.log(e);
  // console.log(idx);
});
