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
    let updateButton = document.getElementById('createBook');
    let cancelButton = document.getElementById('cancel');
    let dialog = document.getElementById('bookCreation');
  
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
        let deleteBtn = document.createElement('button')
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let icon = document.createElement('i')
        let radio1 = document.createElement('input');
        let radio2 = document.createElement('input');
        let label1 = document.createElement('label');
        let label2 = document.createElement('label');
        
        /////////////////////////////
        deleteBtn.classList.add('delete');
        deleteBtn.innerText = 'Delete';
        deleteBtn.value = 'delete';
        deleteBtn.dataset.index = i;
        //////////////////////////////
        newDiv.dataset.index = i;
        newDiv.classList.add('card')
        //////////////////////////////
        radio1.setAttribute('type', 'radio');
        radio1.setAttribute('name', `${i}`);
        radio1.setAttribute('value', '0')
        radio2.setAttribute('type', 'radio');
        radio2.setAttribute('value', '1')
        radio2.setAttribute('name', `${i}`);
        if(book.read == '0'){
          radio1.setAttribute('checked','checked')
          icon.classList.add('fas','fa-book-reader', 'fa-2x')
        } else {
          radio2.setAttribute('checked','checked')
          icon.classList.add('fas', 'fa-book', 'fa-2x')
        }
        label1.innerText = ('Read:');
        label2.innerText = (' Not Read:');
        
        //////////////////////////////
        
        
        icon.setAttribute('id', `icon${i}`);
        
        p1.innerText = `Title: ${book.title}`
        p2.innerText = `Author: ${book.author}`
        p3.innerText = `Pages: ${book.pages}`
        
        p4.appendChild(label1);
        p4.appendChild(radio1);
        p4.appendChild(label2);
        p4.appendChild(radio2);
        displayLib.appendChild(newDiv);
        newDiv.appendChild(icon);
        newDiv.appendChild(p1);
        newDiv.appendChild(p2);
        newDiv.appendChild(p3);
        newDiv.appendChild(p4);
        newDiv.appendChild(deleteBtn);
        }
    })
}

//delete whatever the dataset index is 5head
displayLib.addEventListener('click', (e) => {
  let target = e.target
  
  if(target.value == 'delete'){
    let i = target.dataset.index;
    let targetedDiv = document.querySelector(`[data-index='${i}']`)
    displayLib.removeChild(targetedDiv)
    }
  if(target.type == 'radio'){
    let y = target.name
    let iconChange = document.querySelector(`#icon${y}`)
    if(target.value == '0'){
      iconChange.classList.add('fas','fa-book-reader', 'fa-2x')
    } else {
      iconChange.classList.remove('fas','fa-book-reader', 'fa-2x')
      iconChange.classList.add('fas', 'fa-book', 'fa-2x')
    }
  } 
})


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
