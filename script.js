const myLibrary = [
    {
        title: "Clean Code",
        author: "Robert C. Martin",
        pages: 464,
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

