const myLibrary = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        page: 464,
        read: false
    },
];

function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.id = crypto.randomUUID()
}

function addBookToLibrary(title, author, page, read) {
    let book = new Book(title, author, page, read);
    myLibrary.push(book);
}

addBookToLibrary('Founders at Work', 'Jessica Livingston', 506, true);
addBookToLibrary('My Life and Work', 'Henry Ford', 439, true);


const container = document.querySelector('#container');

function addBookToPage(){
    container.innerHTML = "";
    let i = 0;
    for (const book of myLibrary){
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
        const read = document.createElement("button");
        read.textContent = book.read ? "Status: Read" : "Status: Not Read";
        // toggle
        read.classList.toggle("read", book.read);
        read.classList.add("toggle-btn");
        displayBook.appendChild(read);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.dataset.index = i;
        i++;
        displayBook.appendChild(deleteButton);
        container.appendChild(displayBook);  
    }
}
addBookToPage()


const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector('#new-book');
newBookBtn.addEventListener('click', () => {
    dialog.showModal();
});

// const submitBtn = document.querySelector('#submit-btn');
const submitForm = document.querySelector('form');
submitForm.addEventListener("submit", () => {
    const inputTitle = document.querySelector('#title');
    const title = inputTitle.value;
    const inputAuthor = document.querySelector('#author');
    const author = inputAuthor.value;
    const inputPage = document.querySelector('#page');
    const page = inputPage.value;
    const inputRead = document.querySelector('#read');
    const read = inputRead.checked;
    console.log(title, author, page, read);
    addBookToLibrary(title, author, page, read);
    addBookToPage();
    submitForm.reset();
});

const cancelBtn = document.querySelector('#cancel-btn');
cancelBtn.addEventListener("click", () => {
    submitForm.reset();
    dialog.close();
})

container.addEventListener("click", (e) => {
    if(e.target.hasAttribute('data-index')){
        const indexToRemove = e.target.dataset.index; 
        myLibrary.splice(indexToRemove, 1);
        addBookToPage();
    }
    if (e.target.classList.contains('toggle-btn')) {
        const readBtn = e.target;
        const isRead = readBtn.classList.toggle('read');
        readBtn.textContent = isRead ? "Status: Read" : "Status: Not Read";
    }
})
