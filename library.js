let myLibrary = [];

//Constructor function for Book object
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  // this.info = function () {
  //   return [this.title, this.author, this.pages, this.read];
  // };
}

//Create new Book object and push to myLibrary array
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);

  myLibrary.push(newBook);
  render();
}

addBookToLibrary("Game of Thrones", "George R. R. Martin", 694, false);
addBookToLibrary("Becoming", "Michelle Obama", 400, false);
addBookToLibrary("Factfulness", "Hans Rosling", 341, true);
addBookToLibrary("Sapiens", "Yuval Noah Harari", 443, true);

for (var i = 0; i < myLibrary.length; i++) {
  console.log(myLibrary[i]);
}

function render() {}
