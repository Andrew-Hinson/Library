const titleInput = document.querySelector('#titleInput')
const titleSubmit = document.querySelector('#titleSubmit')
const bookForm = document.querySelector('#bookForm')
let myLibrary = []

function Book (title, author, pages, read) {
    //constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

// const lotr = new Book('LOTR', 'JRRT', 1000, 'have not');


function addBookToLibrary() {
    //take user input and add to array
    let work = new Book(
        bookForm.elements.title.value,
        bookForm.elements.author.value,
        bookForm.elements.pages.value,
        bookForm.elements.read.value
    )
    myLibrary.push(work)
}



bookForm.addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary();
})
