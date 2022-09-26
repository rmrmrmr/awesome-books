let bookList = [];

const addForm = document.querySelector('#inputForm');
const postedBooks = document.querySelector('#postedBooks');

function removeFunc(rem) {
  const bookId = rem.id;
  rem.remove();
  for(let i = 0; i < bookList.length; i += 1) {
    if(bookList[i] = bookId){
      bookList.splice(i, 1);
    }
  }
}

const createBook = (ev) => {
  ev.preventDefault();

  let book = {
    title: document.querySelector('#titleInput').value,
    author: document.querySelector('#authorInput').value,
  }

  bookList.push(book);
  postedBooks.innerHTML= '';

  for(let i = 0; i < bookList.length; i += 1) {
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
    removeBttn.addEventListener('click', () => {removeFunc(bookCont)});

    postedBooks.appendChild(bookCont);
  }

  document.forms[0].reset();
}


addForm.addEventListener('submit', createBook);