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

function addBookToPage(){
    for (const book of myLibrary){
        const container = document.querySelector('#container');
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
        read.textContent = book.read;
        read.classList.add("read");
        displayBook.appendChild(read);
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");
        displayBook.appendChild(deleteButton);
        container.appendChild(displayBook);
    }
}

addBookToPage()


const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector('#newBook');
newBookBtn.addEventListener('click', () => {
    dialog.showModal();
});
