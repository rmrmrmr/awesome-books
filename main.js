let bookList =[]

const addForm = document.querySelector('#inputForm');
const postedBooks = document.querySelector('#postedBooks');

const createBook = (ev) => {
  ev.preventDefault();
  let book = {
    title: document.querySelector('#titleInput').value,
    author: document.querySelector('#authorInput').value,
  }
  bookList.push(book);
  console.log(bookList);
  /* for(let i = 0; i < bookList.length; i += 1) {
    const bookCont = document.createElement('div');
    bookCont.classList.add('bookCont');
    
    const dispTitle = document.createElement('p');
    dispTitle.classList.add('postTitle');
    dispTitle.innerHTML = `"${book.title}"`;
    bookCont.appendChild(dispTitle);
    console.log(dispTitle);
    
    const dispAuthor = document.createElement('p');
    dispAuthor.classList.add('postAuthor');
    dispAuthor.innerHTML = `by ${book.author}`;
    bookCont.appendChild(dispAuthor);
    console.log(dispAuthor);
    
    postedBooks.appendChild(bookCont);
  } */
  document.forms[0].reset();
}


addForm.addEventListener('submit', createBook);