const fs = require("fs");
let data = fs.readFileSync("./originalData.txt", "utf-8");

data = data.split("\n");

function parseData(data) {
  const hashmap = { A: 0, B: 1, C: 2, D: 3 };
  const result = [];
  let quiz;
  for (let i = 0; i < data.length; i++) {
    let idx = i % 6;
    if (idx == 0) {
      quiz = {};
      quiz.question = data[i];
    } else if (idx == 5) {
      quiz.answer = hashmap[data[i].split(" ")[1][0]];
      result.push(quiz);
    } else {
      if (!quiz.options) {
        quiz.options = [];
      }
      quiz.options.push(data[i].slice(3));
    }
  }
  return result;
}

fs.writeFileSync('parsedData.js', JSON.stringify(parseData(data)))