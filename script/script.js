const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const bookPages = document.querySelector('#pages');
const readStatus = document.querySelector('#read');
const addButton = document.querySelector('.addBook');
const newBook = document.querySelector('.newBook');
const bookForm = document.querySelector('.book-form');

const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');

let myLibrary = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author=author;
    this.pages=pages;
    this.read=read;

}

function addBookToLibrary(){
    myLibrary.push(new Book(name, author, pages, read));
}

addBookToLibrary.prototype.createCard = function(arr){
    for (let i=0; i<arr.length; i++){
        const div = document.createElement('div');
        for(let key in arr[i]){
            const p = document.createElement('p');
            p.textContent = `${key}: ${arr[i][key]}`;
            div.appendChild(p);
        }
        const delButton = document.createElement('button');
        delButton.classList.add('delButton');
        delButton.textContent='delete';
        div.appendChild(delButton);

        card.appendChild(div);
    }
}

addBookToLibrary.prototype.clearInput = function(){
    bookName.value = '';
    authorName.value = '';
    bookPages.value = '';
}

addButton.addEventListener('click', (e)=>{
    card.innerHTML = '';
    e.preventDefault();
    Book(bookName.value, authorName.value, bookPages.value, readStatus.value);
    addBookToLibrary();

    addBookToLibrary.prototype.createCard(myLibrary);
    addBookToLibrary.prototype.clearInput();
    bookForm.classList.remove('display-form');
    
});

newBook.addEventListener('click', ()=>{
    // bookForm.setAttribute('style', 'display: flex;');
    bookForm.classList.toggle('display-form');
});




