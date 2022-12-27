const bookName = document.querySelector('#bookName');
const authorName = document.querySelector('#authorName');
const bookPages = document.querySelector('#pages');
const readStatus = document.querySelector('#read');
const addButton = document.querySelector('.addBook');
const newBook = document.querySelector('.newBook');
const bookForm = document.querySelector('.book-form');

const cardContainer = document.querySelector('.card-container');
const card = document.querySelector('.card');
// let del;


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
            p.textContent = `${key.replace(key.charAt(0), key.charAt(0).toUpperCase())}: ${arr[i][key]}`;
            div.appendChild(p);
        }

        const editButton = document.createElement('button');
        editButton.setAttribute('data-index-number', i);
        editButton.classList.add('edit-button');
        editButton.textContent = 'Edit';
        div.appendChild(editButton);

        const delButton = document.createElement('button');
        delButton.setAttribute('data-index-number', i);
        delButton.classList.add('del-button');
        delButton.textContent='Delete';
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
    newBook.textContent = 'New Book';
});

newBook.addEventListener('click', (e)=>{
    // bookForm.setAttribute('style', 'display: flex;');
    bookForm.classList.toggle('display-form');
    if(e.target.innerText === 'New Book'){
        e.target.innerText = 'Cancel';
    }else{
        e.target.innerText = 'New Book';
    }
});

card.addEventListener('click', (e)=>{
    // console.log(e.target.textContent);
    if(e.target.textContent === 'Delete'){
        myLibrary.splice(e.target.dataset.indexNumber, 1);
        card.innerHTML = '';
        addBookToLibrary.prototype.createCard(myLibrary);
    }else if(e.target.textContent === 'Edit'){
        // console.log(myLibrary[e.target.dataset.indexNumber]['read']);
        if(myLibrary[e.target.dataset.indexNumber]['read'] === 'Yes'){
            myLibrary[e.target.dataset.indexNumber]['read'] = 'No';
            card.innerHTML = '';
            addBookToLibrary.prototype.createCard(myLibrary);
        }else{
            myLibrary[e.target.dataset.indexNumber]['read'] = 'Yes';
            card.innerHTML = '';
            addBookToLibrary.prototype.createCard(myLibrary);
        }
    }
});

