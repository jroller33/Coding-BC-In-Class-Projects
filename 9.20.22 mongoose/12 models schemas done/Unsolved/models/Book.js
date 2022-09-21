const mongoose = require('mongoose');

// construct a new instance of schema class
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: false },
  publisher: String,
  stockCount: Number,
  price: Number,
  inStock: Boolean,
  lastAccessed: { type: Date, default: Date.now },
});

// using mongoose.model() to make a model based on 'bookSchema'
const Book = mongoose.model('Book', bookSchema);

const handleError = (err) => console.error(err);

// create a new instance of the model, a document
Book.create(
  {
    title: 'Diary of Anne Frank',
    author: 'Anne Frank',
    publisher: 'Scholastic',
    stockCount: 10,
    price: 10,
    inStock: true,
  },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

Book.create(
  { title: 'Oh the Places You Will Go!', author: 'Dr. Seuss' },
  (err) => (err ? handleError(err) : console.log('Created new document'))
);

Book.create({ title: 'Harold and the Purple Crayon' }, (err) =>
  err ? handleError(err) : console.log('Created new document')
);

module.exports = Book;
