const mongoose = require('../db/mongoose');

const Book = mongoose.model('Book', {
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  author: {
    type: String,
    trim: true,
    required: true,
    minlength: 3
  },
  bno: {
    type: String,
    trim: true,

  },
  isbn: {
    type: String,
    trim: true,

  },
  reference: {
    type: String,
    trim: true,
  },
  pages: {
    type: Number,
    required: true,

  },
  date: {
    type:Number,
    required: true,
  }
});

module.exports=Book;
