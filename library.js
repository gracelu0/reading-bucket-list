let myLibrary = [];

//Container for library
var libraryContainer = document.getElementsByClassName("container")[0];

//Get modal
var modal = document.getElementById("formModal");

//Get button that opens modal
var newBookButton = document.getElementById("newBookButton");

//Get <span> element that closes modal
var close = document.getElementsByClassName("close")[0];

//Get form for adding a new book
var newBookForm = document.getElementsByClassName("bookForm")[0];

//When user clickes the button, open modal for form
newBookButton.onclick = function () {
  modal.style.display = "block";
};

//When user clicks X, close modal
close.onclick = function () {
  modal.style.display = "none";
};

//When user clicks outside of modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//Constructor function for Book object
function Book(title, author, pages, status, description) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.description = description;

  // this.info = function () {
  //   return [this.title, this.author, this.pages, this.read];
  // };
}

//Create new Book object and push to myLibrary array
function addBookToLibrary(title, author, pages, status, description) {
  let newBook = new Book(title, author, pages, status, description);

  myLibrary.push(newBook);
  console.log(myLibrary.length);
  renderNewBook(title, author, pages, status, description);
}

// addBookToLibrary(
//   "Game of Thrones",
//   "George R. R. Martin",
//   694,
//   false,
//   "A Game of Thrones is the first of seven planned novels in A Song of Ice and Fire, an epic fantasy series by American author George R. R. Martin."
// );
// addBookToLibrary(
//   "Factfulness",
//   "Hans Rosling",
//   341,
//   true,
//   "Factfulness: The stress-reducing habit of only carrying opinions for which you have strong supporting facts. When asked simple questions about global trends - why the world's population is increasing; how many young women go to school; how many of us live in poverty - we systematically get the answers wrong. So wrong that a chimpanzee choosing answers at random will consistently outguess journalists, Nobel laureates, and investment bankers. In Factfulness, Professor of International Health and a man who can make data sing, Hans Rosling, together with his two long-time collaborators Anna and Ola, offers a radical new explanation of why this happens, and reveals the ten instincts that distort our perspective."
// );
// addBookToLibrary(
//   "Sapiens",
//   "Yuval Noah Harari",
//   443,
//   true,
//   "Sapiens, the book, takes us on a breath-taking ride through our entire human history, from its evolutionary roots to the age of capitalism and genetic engineering, to uncover why we are the way we are."
// );

// for (var i = 0; i < myLibrary.length; i++) {
//   console.log(myLibrary[i]);
// }

function render(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i);
    const newCard = document.createElement("div");
    newCard.className = "card";
    const newImageContainer = document.createElement("div");
    newImageContainer.className = "image-container";
    const newImage = document.createElement("img");
    newImage.className = "image";
    newImage.src = "assets/becoming.jpg";
    const newOverlay = document.createElement("div");
    newOverlay.className = "overlay";
    const newDescription = document.createElement("div");
    newDescription.className = "description";
    newDescription.innerHTML = arr[i].description;
    const newBookInfo = document.createElement("div");
    newBookInfo.className = "bookInfo";
    newCard.appendChild(newImageContainer);
    newImageContainer.appendChild(newImage);
    newImageContainer.appendChild(newOverlay);
    newOverlay.appendChild(newDescription);
    newCard.appendChild(newBookInfo);
    const newTitle = document.createElement("h3");
    newTitle.textContent = arr[i].title;
    const newAuthor = document.createElement("h4");
    newAuthor.textContent = "by " + arr[i].author;
    const newPages = document.createElement("h5");
    newPages.textContent = arr[i].pages + " pages";
    newBookInfo.appendChild(newTitle);
    newBookInfo.appendChild(newAuthor);
    newBookInfo.appendChild(newPages);
    document.getElementsByClassName("container")[0].appendChild(newCard);
  }
}

function addBook(e) {
  e.preventDefault();
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pageCount = document.getElementById("pages").value;
  let description = document.getElementById("description").value;
  let descriptionBox = document.getElementById("description");

  console.log(title, author, pageCount);

  let newBook = new Book(title, author, pageCount, false, description);

  myLibrary.push(newBook);
  newBookForm.reset();
  descriptionBox.value = "";
  modal.style.display = "none";
  console.log(myLibrary.length);

  render(myLibrary);

  // addBookToLibrary(title, author, pageCount, false, description);
}

let addBookBtn = document.getElementById("addBookButton");
addBookBtn.onclick = addBook;

// render();
