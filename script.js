let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        if (this.read == false) {
            return `${this.title}, by ${this.author}, ${this.pages} pages, not read yet`;
        }

        return `${this.title}, by ${this.author}, ${this.pages} pages, already read`;
    }
}


const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(theHobbit.info());