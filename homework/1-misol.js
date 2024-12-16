// Book class
class Book {
  title;
  author;
  genre;
  available;
  constructor(title, author, genre, available) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = available;
  }

  getDetails() {
    return `Title: ${this.title}, Author: ${this.author}, Genre: ${
      this.genre
    }, Available: ${this.available ? "Yes" : "No"}`;
  }

  markAsBorrowed() {
    if (this.available) {
      this.available = false;
      return `${this.title} kitob olib turildi`;
    } else {
      return `${this.title} kitob avvaldan olingan.`;
    }
  }

  markAsReturned() {
    this.available = true;
    return `${this.title} qaytarildi`;
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(newBook) {
    if (this.books.includes(newBook)) {
      console.log(`"${newBook.title}" avvaldan bor`);
    } else {
      this.books.push(newBook);
      console.log(`Kitob "${newBook.title}" kutubxonaga qo'shildi`);
    }
  }

  removeBook(title) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        this.books[i] = this.books[this.books.length - 1];
        this.books.pop();
        console.log(`"${title}" kitob olib tashlandi `);
        return;
      }
    }
  }

  searchByGenre(genre) {
    const booksByGenre = this.books.filter((book) => book.genre === genre);
    if (booksByGenre.length > 0) {
      booksByGenre.forEach((book) => console.log(book.getDetails()));
    } else {
      console.log(`Bunday janrda kitob yo'q "${genre}".`);
    }
  }

  listAvailableBooks() {
    let available1 = false;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].available) {
        console.log(this.books[i].getDetails());
        available1 = true;
      }
    }
  }
}

let library = new Library();

const book1 = new Book("Atomic Habits", "James Clear", "self help book", true);
const book2 = new Book("deep work", "George Orwell", "fantasy", true);

library.addBook(book1);
library.addBook(book2);

library.listAvailableBooks();

console.log(book1.markAsBorrowed());

library.listAvailableBooks();

library.searchByGenre("Fantasy");
library.searchByGenre("Sci-Fi");

library.removeBook("1984");
library.listAvailableBooks();

console.log(book1.markAsReturned());
library.listAvailableBooks();
