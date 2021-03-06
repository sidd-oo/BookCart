const newBookButton = document.querySelector('#add-book');
const bookForm = document.querySelector('#book-form');
const submitForm = document.querySelector('#submit-btn');
const tableBody = document.querySelector('#table-body');
const clearAll = document.querySelector('#clear-all');
const removeBook = document.querySelector('.remove-book');

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
    bookForm.reset();

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

function addBooksToTable(){
  clearTable();
    for(let id = 0; id < myLibrary.length; id++){
      const newRow = document.createElement('tr');
      newRow.classList.add('table-body-element');
      newRow.setAttribute('data-id',`${id}`);
      if(myLibrary[id].read == true){
          newRow.innerHTML = `
                    <td> ${myLibrary[id].title}</td>
                    <td> ${myLibrary[id].author}</td>
                    <td> ${myLibrary[id].pages} </td>
                    <td> <button onclick = "toggleStatus(${id})" type = "button" class = "toggle-read">read</button></td>
                    <td> <button onclick = "removeBookFromTable(${id})" type = "button" class="remove-book">Remove</button></td>`;
      }else{
        newRow.innerHTML = `
                    <td> ${myLibrary[id].title}</td>
                    <td> ${myLibrary[id].author}</td>
                    <td> ${myLibrary[id].pages} </td>
                    <td> <button onclick = "toggleStatus(${id})" type = "button" class = "toggle-read">unread</button></td>
                    <td> <button onclick = "removeBookFromTable(${id})" type = "button" class="remove-book">Remove</button></td>`;
      }
                          
      tableBody.appendChild(newRow);
      }
}

function toggleStatus(id){
  if(myLibrary[id].read === true){
    myLibrary[id].read = false;
  }else{
    myLibrary[id].read = true;
  }
  clearTable();
  addBooksToTable();
}

function removeBookFromTable(id){
  myLibrary.splice(id,1);
  addBooksToTable();
}

function clearTable(){
  tableBody.innerHTML = "";
}

function emptyLibrary(){
  for(let i = 0; i < myLibrary.length; i++){
    tableBody.remove();
  }
  myLibrary = [];
}
newBookButton.addEventListener('click',showForm);
submitForm.addEventListener('click',addBookToLibrary);
submitForm.addEventListener('click',addBooksToTable);
clearAll.addEventListener('click',emptyLibrary);
