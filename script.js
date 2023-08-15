let myLibrary = [];

const newCard = document.createElement("div");

function addCard() {
  const newCard = document.createElement("div");
  newCard.classList.add("card")

  // TODO: MODIFY THIS TO DYNAMICALLY ADD CARD INFO  --//
  const cardTitle = document.createElement("div");
  cardTitle.textContent = `Title: `;  
  newCard.appendChild(cardTitle);

  const cardAuthor = document.createElement("div");
  cardAuthor.textContent = `Author: `
  newCard.appendChild(cardAuthor);


  const cardPages = document.createElement("div");
  cardPages.textContent = `Page Count: `
  newCard.appendChild(cardPages);

  const cardRead = document.createElement("div");
  cardRead.textContent = `Read Status: `
  newCard.appendChild(cardRead);

  const readButton = document.createElement("button");
  readButton.textContent = "Read";
  newCard.appendChild(readButton);

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove"
  newCard.appendChild(removeButton);
  // TODO: MODIFY THIS TO DYNAMICALLY ADD CARD INFO  --//

  const targetDiv = document.getElementById("card-grid");
  targetDiv.appendChild(newCard);

}
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

function addBook() {}

function removeBook() {}

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

for (let i = 0; i < myLibrary.length; i++) {
  addCard();
}
