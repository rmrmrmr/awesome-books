let bookList = [];
const re = /^$/;

const addForm = document.querySelector('#inputForm');
const postedBooks = document.querySelector('#postedBooks');

function bookStorage() {
  localStorage.setItem('book',JSON.stringify(bookList));
}

function removeFunc(rem) {
  const bookId = Number(rem.id);
  rem.remove();
  for (let i = 0; i < bookList.length; i += 1) {
    if (i === bookId) {
      bookList.splice(i, 1);
    }
  }
  const itemss = JSON.parse(localStorage.getItem('book'));
  console.log(itemss, typeof itemss);
}

const createBook = (ev) => {
  ev.preventDefault();

  const book = {
    title: document.querySelector('#titleInput').value,
    author: document.querySelector('#authorInput').value,
  };

  bookList.push(book);
  postedBooks.innerHTML = '';

  for(let i = 0; i < bookList.length; i += 1) {
    if((bookList[i].title === re) || (bookList[i].author === re)) {
      bookList.splice(i, 1);
    }
  }

  for (let i = 0; i < bookList.length; i += 1) {
    bookList[i].id = i;

    const bookCont = document.createElement('div');
    bookCont.classList.add('bookCont');
    bookCont.setAttribute('id', bookList[i].id);

    const dispTitle = document.createElement('p');
    dispTitle.classList.add('postTitle');
    dispTitle.innerHTML = `"${bookList[i].title}"`;
    bookCont.appendChild(dispTitle);

    const dispAuthor = document.createElement('p');
    dispAuthor.classList.add('postAuthor');
    dispAuthor.innerHTML = `by ${bookList[i].author}`;
    bookCont.appendChild(dispAuthor);

    const removeBttn = document.createElement('button');
    removeBttn.innerHTML = 'Remove';
    removeBttn.classList.add('removeBttn');
    // removeBttn.setAttribute('type', submit);
    removeBttn.setAttribute('id', `bttn${bookList[i].id}`);
    bookCont.appendChild(removeBttn);
    removeBttn.addEventListener('click', () => { removeFunc(bookCont); });

    postedBooks.appendChild(bookCont);
  }

  document.forms[0].reset();
  bookStorage();
};


addForm.addEventListener('submit', createBook);


document.addEventListener('DOMContentLoaded', (ev) => {
  bookList = JSON.parse(localStorage.getItem('book')) || [];
  for(let i = 0; i < bookList.length; i += 1) {
    if((bookList[i].title.value === undefined) || (bookList[i].author.value === undefined)) {
      bookList.splice(i, 1);
    }
  }
  createBook(ev);
});