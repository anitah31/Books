let books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, isAvailable: true },
  { id: 2, title: "1984", author: "George Orwell", year: 1949, isAvailable: true },
  { id: 3, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, isAvailable: true }
];

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = "";

  books.forEach(book => {
    let bookDiv = document.createElement("div");
    bookDiv.classList.add("book");

    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Year:</strong> ${book.year}</p>
      <p><strong>Status:</strong> ${book.isAvailable ? "Available" : "Borrowed"}</p>
      ${
        book.isAvailable
          ? `<button class="borrow" onclick="borrowBook(${book.id})">Borrow</button>`
          : `<button class="return" onclick="returnBook(${book.id})">Return</button>`
      }
    `;

    libraryDiv.appendChild(bookDiv);
  });
}

function borrowBook(bookId) {
  const book = books.find(b => b.id === bookId);
  if (book && book.isAvailable) {
    book.isAvailable = false;
    displayBooks();
  }
}

function returnBook(bookId) {
  const book = books.find(b => b.id === bookId);
  if (book && !book.isAvailable) {
    book.isAvailable = true;
    displayBooks();
  }
}

window.onload = displayBooks;
