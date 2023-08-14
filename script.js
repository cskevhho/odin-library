let myLibrary = [];
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  info = () => {
    if (this.read == false) {
      return `${this.title}, by ${this.author}, ${this.pages} pages, not read yet`;
    }

    return `${this.title}, by ${this.author}, ${this.pages} pages, already read`;
  };
}

function addBookToLibrary(Book) {
  myLibrary.push(Book);
}

function addBook(){
    
}

function removeBook(){}

const theHobbit = new Book(
  "The Hobbit, or There and Back Again",
  "J.R.R. Tolkien",
  304,
  false
);
const lotrOne = new Book(
  "Lord of the Rings: The Fellowship of the Ring",
  "J.R.R. Tolkien",
  479,
  false
);
const lotrTwo = new Book(
  "Lord of the Rings: The Twin Towers",
  "J.R.R. Tolkien",
  415,
  false
);
const lotrThree = new Book(
  "Lord of the Rings: Return of the King",
  "J.R.R. Tolkien",
  347,
  false
);

addBookToLibrary(theHobbit);
addBookToLibrary(lotrOne);
addBookToLibrary(lotrTwo);
addBookToLibrary(lotrThree);
console.log(myLibrary);
