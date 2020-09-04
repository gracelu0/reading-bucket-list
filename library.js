let myLibrary = [];

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
  const newBook = new Book(title, author, pages, status, description);

  myLibrary.push(newBook);
}

addBookToLibrary(
  "Game of Thrones",
  "George R. R. Martin",
  694,
  false,
  "A Game of Thrones is the first of seven planned novels in A Song of Ice and Fire, an epic fantasy series by American author George R. R. Martin."
);
addBookToLibrary(
  "Factfulness",
  "Hans Rosling",
  341,
  true,
  "Factfulness: The stress-reducing habit of only carrying opinions for which you have strong supporting facts. When asked simple questions about global trends - why the world's population is increasing; how many young women go to school; how many of us live in poverty - we systematically get the answers wrong. So wrong that a chimpanzee choosing answers at random will consistently outguess journalists, Nobel laureates, and investment bankers. In Factfulness, Professor of International Health and a man who can make data sing, Hans Rosling, together with his two long-time collaborators Anna and Ola, offers a radical new explanation of why this happens, and reveals the ten instincts that distort our perspective."
);
addBookToLibrary(
  "Sapiens",
  "Yuval Noah Harari",
  443,
  true,
  "Sapiens, the book, takes us on a breath-taking ride through our entire human history, from its evolutionary roots to the age of capitalism and genetic engineering, to uncover why we are the way we are."
);

// for (var i = 0; i < myLibrary.length; i++) {
//   console.log(myLibrary[i]);
// }

function render() {
  for (var i = 0; i < myLibrary.length; i++) {
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
    newDescription.innerHTML = myLibrary[i].description;

    const newBookInfo = document.createElement("div");
    newBookInfo.className = "bookInfo";

    newCard.appendChild(newImageContainer);
    newImageContainer.appendChild(newImage);
    newImageContainer.appendChild(newOverlay);
    newOverlay.appendChild(newDescription);
    newCard.appendChild(newBookInfo);

    const newTitle = document.createElement("h3");
    newTitle.textContent = myLibrary[i].title;
    const newAuthor = document.createElement("h4");
    newAuthor.textContent = "by " + myLibrary[i].author;
    const newPages = document.createElement("h5");
    newPages.textContent = myLibrary[i].pages + " pages";
    newBookInfo.appendChild(newTitle);
    newBookInfo.appendChild(newAuthor);
    newBookInfo.appendChild(newPages);

    document.getElementsByClassName("container")[0].appendChild(newCard);
  }
}

render();
