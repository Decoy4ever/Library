class Library
{
    constructor()
    {
        this.myCollectionBks = []
    }

    addBookToLib(bk)
    {
        this.myCollectionBks.push(bk)
        return `Added to Lib -> ${bk.getBkDetails()}`
    }

    displayListOfBks()
    {
        if(this.myCollectionBks.length === 0)
        {
            return `No books have been Added`
        }
        else
        {
            return this.myCollectionBks.map((bk,index) => {
                return `${bk.getBkDetails()} on Shelf ${index}`
            })
        }
    }
}

class Book
{
    constructor(title, author, num_pgs, status)
    {
        this.title = title;
        this.author = author;
        this.num_pgs = num_pgs;
        this.status = status
    }

    getBkDetails()
    {
        return `Book: ${this.title}, Author: ${this.author}, Pages: ${this.num_pgs}, Status: ${this.status}`
    }
}

class UI
{
    constructor()
    {
        this.dialog = document.querySelector('.dialog');
        this.showModal = document.querySelector('.show-modal');
        this.closeModal = document.querySelector('.exit-btn');
        this.submitBtn = document.querySelector(".submit-btn");
        this.mainCard = document.querySelector(".main-card");
        this.author_input = document.querySelector(".author");
        this.title_input = document.querySelector(".title");
        this.pages_input = document.querySelector(".pages");
        this.status_input = document.querySelector(".status")
        this.library = new Library()
    }

    addFormUI()
    {     
        this.title = `${this.title_input.value}`
        this.author = `${this.author_input.value}`
        this.pages = `${this.pages_input.value}`
        this.status = `${this.status_input.value}`

        // create the book
        const book = new Book(this.title, this.author, this.pages, this.status)

        // add new instance of book by calling the function addBookToLib
        this.library.addBookToLib(book)
    }

    displayInfoUI()
    {
        this.addFormUI()

        // print out each book
        this.library.myCollectionBks.forEach((indexBk) => 
        {
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

            // create button and change status if clicking
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
            this.mainCard.appendChild(div); 
        })
    }
  
    DialogUI()
    {
        // open the dialog form
        this.showModal.addEventListener('click',() => 
        {
            this.dialog.showModal();
        })
        
        this.submitBtn.addEventListener('click',(e) => 
        {
            this.mainCard.textContent = "";    
            this.displayInfoUI();
            e.preventDefault();
            this.dialog.close();  
        }) 

        // // close the dialog form
        this.closeModal.addEventListener('click',(e) => 
        {
            e.preventDefault();
            this.dialog.close();
            console.log("close form activated")
        }) 
    }
}

const ui = new UI()
ui.DialogUI()








