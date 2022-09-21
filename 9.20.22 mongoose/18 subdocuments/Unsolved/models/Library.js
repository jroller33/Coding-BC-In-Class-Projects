//            done

const mongoose = require('mongoose');

// Define a new schema named `bookSchema` for the subdocument
// this is the child schema
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: Number,
});

// parent schema
const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },  
  // array that holds the books
  books: [bookSchema],          
  lastAccessed: { type: Date, default: Date.now },
});

// Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);

// Create a new instance of the model including the subdocuments
const bookData = [
  { title: 'title 1', price: 10 },
  { title: 'title 2', price: 20 },
  { title: 'title 3', price: 5 },
];

Library.create({ name: 'New Library', books: bookData }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});


module.exports = Library;
