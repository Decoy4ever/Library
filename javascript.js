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
// const card = document.querySelector(".card")

const author = document.querySelector(".author")
const title = document.querySelector(".title")
const numberOfpgs = document.querySelector(".pages")
 
function Library()
{
    this.myLibraryOfBooks = []; // store the books as object inside here
}

// function constructor Book
function Book(author, title, number_pg)
{
    this.title = title;
    this.author = author;
    this.number_pg = number_pg;
}

// Library to inherit the objects of Book
Object.setPrototypeOf(Library.prototype, Book.prototype);

// create a function called addBookToLibrary which is an object for Library().
Library.prototype.addBookToLibrary = function(book)
{
    // the only property of addBookToLibray is adding books into the library
    return this.myLibraryOfBooks.push(book);
}

// create a library constructor
const lib = new Library();

// function displayInfo(bk)
Library.prototype.displayInfoBook = function(bk)
{
    // create a book constructor
    bk = new Book(`${author.value}`,`${title.value}`,`${numberOfpgs.value}`)
    
    // add book to library
    lib.addBookToLibrary(bk);

    // display array of books
    console.log(lib.myLibraryOfBooks)
}


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
            const div = document.createElement('div');
            const classAttName = document.createAttribute('class');
            // retrieve the card class and set it to the div
            classAttName.value = "card";
            div.setAttributeNode(classAttName);

            // create and set the Header
            const headerBk = document.createElement('h3');
            headerBk.textContent = `${title.value}`;
            div.appendChild(headerBk);

            // create a two more divs 
            const paraAuthor = document.createElement('p');
            paraAuthor.textContent = `Author: ${author.value}`
            div.appendChild(paraAuthor);

            const paraNumOfpgs = document.createElement('p');
            paraNumOfpgs.textContent = `Pages: ${numberOfpgs.value}`
            div.appendChild(paraNumOfpgs);

            mainCard.appendChild(div);
        })
        
    })

    // close the form
    closeBtn.addEventListener('click',(e) => 
    {
        e.preventDefault();
        dialog.close();
    })
}

// function constructor Library
openCloseDialog()








