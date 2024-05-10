import BookData from "./BookData.js";

function qs(selector) {
  return document.querySelector(selector);
}

const bookNameInput = qs("#bookName");
const authorNameInput = qs("#authorName");
const form = qs("form");
const tbody = qs("#tbody");

const bookData = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let bookName = bookNameInput.value;
  let authorName = authorNameInput.value;
  bookData.push(new BookData(bookName, authorName));

  renderList(bookData);

  showDialog('추가완료', form)

  bookNameInput.value = ''
  authorNameInput.value = ''

  bookNameInput.focus()
});

function renderList(bookData) {
  let template = "";
  let idx = 0
  for (const { bookName, authorName } of bookData) {
    template += `
        <tr>
            <td>${bookName}</td>
            <td>${authorName}</td>
            <td><button data-idx = ${idx}>삭제</button></td>
        </tr>
        `;

    idx++
  }
  tbody.innerHTML = template;
  for (const deleteBtn of tbody.querySelectorAll('button')) {
    deleteBtn.addEventListener('click', e => deleteList(e))
  }
}

function deleteList(e) {
  bookData.splice(e.target.dataset.idx, 1)

  renderList(bookData)

  showDialog('삭제완료', tbody)
}

function showDialog(label, element = form) {
  const dialog = document.createElement("dialog");
  dialog.innerHTML = label;
  element.append(dialog);
  dialog.open = true;
  setTimeout(()=> {
    dialog.remove()
  }, 1000)
}