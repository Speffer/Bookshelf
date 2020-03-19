class BookService {
  save(book) {
    let storageBooks = localStorage.getItem('books');

    let newBook = {
      books: [ ...storageBooks, ...book ]
    };

    localStorage.setItem(JSON.stringify(newBook));
  };

  update(book) {
    let storageBooks = localStorage.getItem('books');
    let newBooks = [ ...storageBooks ];
    let indexBook = storageBooks.findIndex(u => u.id === book.id);
    
    if(indexBook > -1) {
      newBooks.splice(indexBook, 1, { ...book })
    }

    localStorage.setItem('books', JSON.stringify(newBook));
  };

  delete(book) {
    let storageBooks = localStorage.getItem('books');
    let newBooks = [ ...storageBooks ];
    let indexBook = storageBooks.findIndex(u => u.id === book.id);
    
    if(indexBook > -1) {
      newBooks.splice(indexBook, 1)
    }

    localStorage.setItem('books', JSON.stringify(newBooks));
  };
};

export default BookService; 