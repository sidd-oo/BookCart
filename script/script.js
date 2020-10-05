const addBookButton = document.querySelector('#add-book');
const bookformSelector = document.querySelector('#book-form');


let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

addBookButton.addEventListener('click',function(e){
  bookformSelector.style.display = 'flex';
  e.target.style.display = 'none';
})

function addBookToLibrary() {
  const titleSelector = document.querySelector("#title").value;
  const authorSelector = document.querySelector('#author').value;
  const pagesSelector = document.querySelector('#pages').value;
  const readSelector = document.querySelector('#read').value;
}