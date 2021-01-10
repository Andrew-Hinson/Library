const titleInput = document.querySelector('#titleInput')
const titleSubmit = document.querySelector('#titleSubmit')
const bookForm = document.querySelector('#bookForm')
const displayLib = document.querySelector('#displayContainer')
let myLibrary = []

function Book (title, author, pages, read) {
    //constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
};

// const lotr = new Book('LOTR', 'JRRT', 1000, 'have not');
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
(function() {
    var updateButton = document.getElementById('createBook');
    var cancelButton = document.getElementById('cancel');
    var dialog = document.getElementById('bookCreation');
  
    updateButton.addEventListener('click', function() {
      dialog.showModal();

    });
    // Form cancel button closes the dialog box
    cancelButton.addEventListener('click', function() {
      dialog.close();
    });
  })();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

function addElement() {
    const lastIndex = myLibrary.length - 1;
        myLibrary.map((book, i) => {
        if(i === lastIndex){
        let newDiv = document.createElement('div');
        let newP = document.createElement('p');
        let deleteBtn = document.createElement('button')
        // deleteBtn.addEventListener('click', curDiv => 0.
        newP.innerText = `${book.title} ${book.author} ${book.pages} ${book.read}`

        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';
        
        newDiv.classList.add('card')
        displayLib.appendChild(newDiv);
        newDiv.appendChild(newP);
        newP.appendChild(deleteBtn);
        } else {
            console.log("ツ")
        }
    })
}


//click event grabs data
bookForm.addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary();
    addElement();
        bookForm.elements.title.value = '';
        bookForm.elements.author.value = '';
        bookForm.elements.pages.value = '';
        bookForm.elements.read.value = '';
})
