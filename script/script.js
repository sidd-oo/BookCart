const newBookButton = document.querySelector('#add-book');
const bookForm = document.querySelector('#book-form');
const submitForm = document.querySelector('#submit-btn');
let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function showForm(event){
  bookForm.style.display = 'flex';
  event.target.style.display = 'none';
}
function hideForm(event){
  bookForm.style.display = 'none';
  newBookButton.style.display = '';
}

function addBookToLibrary(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const isRead = document.querySelector('#read').checked;

    if(title == "" || author == "" || pages == ""){
      alert("Please fill the empty fields")
    }else if(pages == 0){
      alert("Pages of book can't be zero. Try filling the field again!")
    }else{
      let bookObj = new Book(title, author, pages, isRead);
      myLibrary.push(bookObj);
    }

    hideForm();
}

newBookButton.addEventListener('click',showForm);
submitForm.addEventListener('click',addBookToLibrary);