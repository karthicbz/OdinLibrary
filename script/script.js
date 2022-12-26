const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const bookPages = document.querySelector('#pages');
const readStatus = document.querySelector('#read');
const addButton = document.querySelector('.addBook');

const container = document.querySelector('.container');

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

addButton.addEventListener('click', (e)=>{
    container.innerHTML = '';
    e.preventDefault();
    Book(bookName.value, authorName.value, bookPages.value, readStatus.value);
    addBookToLibrary();

    for (let i=0; i<myLibrary.length; i++){
        const div = document.createElement('div');
        for(let key in myLibrary[i]){
            const p = document.createElement('p');
            p.textContent = `${key}: ${myLibrary[i][key]}`;
            div.appendChild(p);
        }
        container.appendChild(div);
    }
});




