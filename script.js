function Book(title, author, page, read) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.page} pages, ${this.read ? 'read' : 'not read'}.`;
    };
}

const book1 = new Book('Founders at Work', 'Jessica Livingston', 506, true);
const book2 = new Book('My Life and Work', 'Henry Ford', 439, true);
book1.info();
book2.info();