/*  // Initial Plan (ongoing changes)
    // 1. Create a var that stores all the book objects (in array object)
    
    // 2. Book constructor that will have the following properties
        * title of book
        * author of the book
        * number of pages
        * status if user has read or not
    
    // 3. `addBook()` will display a form where user inputs this data
        *  Use a `dialog` show a popbox that presents a form
        *  Create a html form (in js or html?) used the properties from the Book constructor
        *  Form will have a submit button and refresh button.
            * if user selects submit button it will close the `dialog`
            * if user selects refesh button it will remove all existing text in the form    

    // 4. `displayBook()` will display the inputed form into one of the cards
        * use if else statement to check if a user has read or not
        * if user has read it will move into the completed card else move to the ongoing card section
*/

const dialog = document.querySelector('.dialog');
const modal = document.querySelector('.button-modal');
const closeBtn = document.querySelector('.exit-btn');
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

    // loop throught the books and print one each
    lib.myLibraryOfBooks.forEach((indexBk) => 
    {    
        const div = document.createElement('div');
        const classAttName = document.createAttribute('class');
        classAttName.value = "card";
        div.setAttributeNode(classAttName); 

        // create and set the Header
        const headerBk = document.createElement('h3');
        
        headerBk.textContent = indexBk.title;
        div.appendChild(headerBk);

        // create a two more divs 
        const paraAuthor = document.createElement('p');
        paraAuthor.textContent = `Author: ${indexBk.author}`
        div.appendChild(paraAuthor);

        const paraNumOfpgs = document.createElement('p');
        paraNumOfpgs.textContent = `Pages: ${indexBk.pages}`
        div.appendChild(paraNumOfpgs);

        // create button
        const statusBtn = document.createElement('button');
        statusBtn.textContent = `${indexBk.status}`;
        console.log(statusBtn.textContent)
        statusBtn.addEventListener('click',() => 
        {
            if(statusBtn.textContent === "Completed")
            {
                statusBtn.textContent = "Ongoing";
                console.log(statusBtn.textContent);
            }
            else if(statusBtn.textContent = "Ongoing")
            {
                statusBtn.textContent = "Completed"
                console.log(statusBtn.textContent)
            }
        })

        div.appendChild(statusBtn);
        mainCard.appendChild(div);
        
        // check the current library
        lib.myLibraryOfBooks[indexBk];
    })
    console.log(lib.myLibraryOfBooks);

}

// Probelm user enter a new book it displays all of the elements in book which duplicate more objects


// openCloseDialog() inherit the properties of Library
Object.setPrototypeOf(openCloseDialog.prototype, Library.prototype)

function openCloseDialog()
{
    // open the dialog
    modal.addEventListener('click',() => 
    {
        // open dialog
        dialog.showModal();
        
        // if usr presses submit btn event
        submitBtn.addEventListener('click',(e) => 
        {
            lib.displayInfoBook();        
        })
        
    })
    
    // close the form
    closeBtn.addEventListener('click',(e) => 
    {
        e.preventDefault();
        dialog.close();
    })

    title_input.value = "";
    author_input.value = "";
    pages_input.value = "";

        
}

openCloseDialog()







