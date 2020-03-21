const save = (book) => {
  let storageBooks = localStorage.getItem('books');
  let parseBooks = [ ...JSON.parse(storageBooks)];
  let newBook = [];
  
  newBook = [ ...parseBooks, { ...book, id: parseBooks.length > 0 ? parseBooks.length + 1 : 1 }]
  
  localStorage.setItem('books', JSON.stringify(newBook));
};

const update = (book) => {
  let storageBooks = localStorage.getItem('books');
  let newBook = [ ...JSON.parse(storageBooks) ];
  let indexBook = newBook.findIndex(u => u.id === book.id);
  
  if(indexBook > -1) {
    newBook.splice(indexBook, 1, { ...book })
  }

  localStorage.setItem('books', JSON.stringify(newBook));
};

const deleteBook = (id) => {
  let storageBooks = localStorage.getItem('books');
  let newBooks = [ ...JSON.parse(storageBooks) ];
  let indexBook = newBooks.findIndex(u => u.id === id);
  
  if(indexBook > -1) {
    newBooks.splice(indexBook, 1)
  }

  localStorage.setItem('books', JSON.stringify(newBooks));
};

const get = () => {
  return localStorage.getItem('books');
}

export default {
  save,
  update,
  deleteBook,
  get
}; 