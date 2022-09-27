const form = document.querySelector('#form');
const listBooks = document.querySelector('#list-books');
let books = new Array(0);
class Books {
  constructor(id,tittle, author){
    this.id = id;
    this.tittle = tittle;
    this.author = author;
  }

  static createHTML () {
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

        Books.createHTML();
      }

      // Remove function
      removeBtn.onclick = () => {
        removeBook(book.id);
      };
    });
  }

  syncStorage();
  }
}

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

// Function
function addBook(e) {
  e.preventDefault();

  const tittleValue = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = Date.now();

  const book = new Books(id, tittleValue, author);


  books = [...books, book];

  Books.createHTML();

  form.reset();
}

// Event Listeners
function eventListeners() {
  // add book
  form.addEventListener('submit', addBook);

  // book DOM
  document.addEventListener('DOMContentLoaded', () => {
    books = JSON.parse(localStorage.getItem('book')) || [];

    Books.createHTML();
  });
}

eventListeners();