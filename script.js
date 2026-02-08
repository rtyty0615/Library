class Book{
    constructor(title, author, page, read){
        this.title = title;
        this.author = author;
        this.page = page;
        this.read = read;
        this.id = crypto.randomUUID()
    }

    toggleReadStatus() {
        this.read = !this.read;
    }
}

class Library {
    constructor(){
        this.books = [];
        this.bindEvents();
    }

    addBook(title, author, page, read){
        const newBook = new Book(title, author, page, read);
        this.books.push(newBook);
        this.render(); 
    }

    render(){
        const container = document.querySelector('#container');
        container.innerHTML = "";
        this.books.forEach((book, index) => {
            const displayBook = document.createElement("div");
            displayBook.id = book.id;
            const title = document.createElement("p");
            title.textContent = book.title;
            title.classList.add("title");
            displayBook.appendChild(title);
            const author = document.createElement("p");
            author.textContent = book.author;
            author.classList.add("author");
            displayBook.appendChild(author);
            const page = document.createElement("p");
            page.textContent = 'Pages: ' + book.page;
            page.classList.add("page");
            displayBook.appendChild(page);
            const readButton = document.createElement("button");
            readButton.textContent = book.read ? "Status: Read" : "Status: Unread";
            readButton.classList.toggle("read", book.read);
            readButton.classList.add("toggle-btn");
            readButton.onclick = () => {
                book.toggleReadStatus();
                this.render();
            }
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.onclick = () => this.removeBook(index);
            const div = document.createElement("div");
            div.appendChild(readButton);
            div.appendChild(deleteButton);
            displayBook.appendChild(div);
            container.appendChild(displayBook);  
        });
    }
    removeBook(index) {
        this.books.splice(index, 1);
        this.render();
    }

    bindEvents() {
        const dialog = document.querySelector("dialog");
        const newBookBtn = document.querySelector('#new-book');
        newBookBtn.addEventListener('click', () => {
            dialog.showModal();
        });

        const submitForm = document.querySelector('form');
        submitForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const inputTitle = document.querySelector('#title');
            const title = inputTitle.value;
            const inputAuthor = document.querySelector('#author');
            const author = inputAuthor.value;
            const inputPage = document.querySelector('#page');
            const page = inputPage.value;
            const inputRead = document.querySelector('#read');
            const read = inputRead.checked;
            this.addBook(title, author, page, read);
            submitForm.reset();
            dialog.close();
        });

        const cancelBtn = document.querySelector('#cancel-btn');
        cancelBtn.addEventListener("click", () => {
            submitForm.reset();
            dialog.close();
        })
    }

}

const myLibrary = new Library();
myLibrary.addBook('Founders at Work', 'Jessica Livingston', 506, true);
myLibrary.addBook('My Life and Work', 'Henry Ford', 439, true);
myLibrary.addBook("Clean Code", "Robert C. Martin", 464, false);



