const qs = (selector, element = document) => element.querySelector(selector);

qs("form").addEventListener("submit", (e) => {
  e.preventDefault();
});

qs("#generate-btn").addEventListener("click", () => {
  const pwLength = qs("#pw-length").value;
  let pool = [];
  console.log(pwLength);

  const lowers = Array.from({ length: 26 }, (_, idx) =>
    String.fromCharCode(idx + 97)
  );
  pool = pool.concat(lowers);
  console.log(pool);

  if (qs("#include-uppercase").checked) {
    const uppers = Array.from({ length: 26 }, (_, idx) =>
      String.fromCharCode(idx + 65)
    );
    pool = pool.concat(uppers);
    console.log(pool);
  }
  if (qs("#include-numbers").checked) {
    const numbers = Array.from({ length: 10 }, (_, idx) =>
      String.fromCharCode(idx + 48)
    );
    pool = pool.concat(numbers);
    console.log(pool);
  }
  if (qs("#include-symbols").checked) {
    const symbols = ["@", "!", "$", "&", "%"];
    pool = pool.concat(symbols);
    console.log(pool);
  }

  const password = pwGenerator(pwLength, pool);

  qs("#pw-result").textContent = password;
});

function pwGenerator(length, pool) {
  let result = "";
  for (let i = 0; i < length; i++) {
    let picked = pool[Math.floor(Math.random() * pool.length)];
    result += picked;
  }
  return result;
}
