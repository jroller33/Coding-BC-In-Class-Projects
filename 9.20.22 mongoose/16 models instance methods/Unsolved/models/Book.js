//          done

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: String,
    price: { type: Number, required: true }
});

bookSchema.methods.getDiscount = function () {
    const discountPrice = this.price * 0.5;
    console.log(`Title: ${this.title}, discounted price: ${discountPrice}`);
}

const Book = mongoose.model('Book', bookSchema);

const discountedBook = new Book({
    title: 'borat',
    price: 100
})

discountedBook.getDiscount();
module.exports = Book;
