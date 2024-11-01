const dialog = document.querySelector('.dialog');
const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.exit-btn');
const submitBtn = document.querySelector(".submit-btn");
const mainCard = document.querySelector(".main-card");
const author_input = document.querySelector(".author");
const title_input = document.querySelector(".title");
const pages_input = document.querySelector(".pages");
const status_input = document.querySelector(".status")

// function constructor library
function Library()
{
     // store the books as object inside here
    this.myLibraryOfBooks = [];
}

// function constructor Book
function Book(author, title, pages, status)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status
}

// Library to inherit the objects of Book
Object.setPrototypeOf(Library.prototype, Book.prototype);

// create a library instance
const lib = new Library();

// create a function called addBookToLibrary() which is a property for Library(). Check Object.getPrototypeOf(Library.prototype)
Library.prototype.addBookToLibrary = function(book)
{
    // retreive data from forms
    this.title = `${title_input.value}`;
    this.author = `${author_input.value}`;
    this.pages = `${pages_input.value}`;
    this.status = `${status_input.value}`;
    
    // create a instance of the book object using this data
    book = new Book(this.title, this.author, this.pages, this.status);

    // the only property of addBookToLibray is adding books into the library array
    this.myLibraryOfBooks.push(book);
}

// function displayInfo(bk)
Library.prototype.displayInfoBook = function(book)
{    
    // add book to library instance and call the method addBookToLibrary
    lib.addBookToLibrary(book);
    lib.myLibraryOfBooks.forEach((indexBk) => 
    {   
        // create a card
        const div = document.createElement('div');
        const classAttName = document.createAttribute('class');
        classAttName.value = "card";
        div.setAttributeNode(classAttName); 

        const headerBk = document.createElement('h3');        
        headerBk.textContent = indexBk.title;
        div.appendChild(headerBk);

        const paraAuthor = document.createElement('p');
        paraAuthor.textContent = `Author: ${indexBk.author}`
        div.appendChild(paraAuthor);

        const paraNumOfpgs = document.createElement('p');
        paraNumOfpgs.textContent = `Pages: ${indexBk.pages}`
        div.appendChild(paraNumOfpgs);

        // create button and change status
        const statusBtn = document.createElement('button');
        statusBtn.textContent = `${indexBk.status}`;
        if(statusBtn.textContent === "Completed")
        {
            statusBtn.style.backgroundColor = "#22c55e";
            statusBtn.style.border = "none";
            statusBtn.style.borderRadius = "4px";
        }
        else if(statusBtn.textContent = "Ongoing")
        {
            statusBtn.style.backgroundColor =  "#ef4444";
            statusBtn.style.border = "none";
            statusBtn.style.borderRadius = "4px";
        }

        statusBtn.addEventListener('click',() => 
        {
            if(statusBtn.textContent === "Completed")
            {
                statusBtn.textContent = "Ongoing";
                statusBtn.style.backgroundColor =  "#ef4444";
                statusBtn.style.border = "none";
                statusBtn.style.borderRadius = "4px";
            }
            else if(statusBtn.textContent = "Ongoing")
            {
                statusBtn.textContent = "Completed"
                statusBtn.style.backgroundColor = "#22c55e";
                statusBtn.style.border = "none";
                statusBtn.style.borderRadius = "4px";
            }
        })

        div.appendChild(statusBtn);
        mainCard.appendChild(div); 
        lib.myLibraryOfBooks[indexBk];
    })
}

// openCloseDialog() inherit the properties of Library
Object.setPrototypeOf(openCloseDialog.prototype, Library.prototype)

function openCloseDialog()
{
    // open the dialog
    showModal.addEventListener('click',() => 
    {
        // open dialog
        dialog.showModal();
    })
    
    submitBtn.addEventListener('click',(e) => 
    {
        mainCard.textContent = "";    
        lib.displayInfoBook();
        e.preventDefault();
        dialog.close();  
    }) 

    // close the dialog form
    closeModal.addEventListener('click',(e) => 
    {
        e.preventDefault();
        dialog.close();
        console.log("close form activated")
    })    
}

openCloseDialog()







