const form = document.querySelector('#form');
const listBooks = document.querySelector('#list-books');
let books = [];

// Clean HTML
function cleanHTML() {
  while (listBooks.firstChild) {
    listBooks.removeChild(listBooks.firstChild);
  }
}

// add books to LocalStorage
function syncStorage() {
  localStorage.setItem('book', JSON.stringify(books));
}

function createHTML() {
  cleanHTML();

  if (books.length > 0) {
    books.forEach((book) => {
      const bookContainer = document.createElement('div');
      bookContainer.classList.add('book-wrap');
      listBooks.appendChild(bookContainer);

      const tittleBook = document.createElement('p');
      tittleBook.classList.add('tittle-book');
      tittleBook.innerText = `"${book.tittle}"`;
      bookContainer.appendChild(tittleBook);

      const authorBook = document.createElement('p');
      authorBook.classList.add('author-book');
      authorBook.innerText = `by ${book.author}`;
      bookContainer.appendChild(authorBook);

      const removeBtn = document.createElement('button');
      removeBtn.classList.add('btn-remove');
      removeBtn.innerText = 'Remove';
      bookContainer.appendChild(removeBtn);

      function removeBook(id) {
        books = books.filter((book) => book.id !== id);

        createHTML();
      }

      // Remove function
      removeBtn.onclick = () => {
        removeBook(book.id);
      };
    });
  }

  syncStorage();
}

// Function
function addBook(e) {
  e.preventDefault();

  const book = {
    id: Date.now(),
    tittle: document.querySelector('#title').value,
    author: document.querySelector('#author').value,
  };

  books = [...books, book];

  createHTML();

  form.reset();
}

// Event Listeners
function eventListeners() {
  // add book
  form.addEventListener('submit', addBook);

  // book DOM

  document.addEventListener('DOMContentLoaded', () => {
    books = JSON.parse(localStorage.getItem('book')) || [];

    createHTML();
  });
}

eventListeners();