const mongoose = require("mongoose");
const express = require("express");

const Book = new mongoose.model(
  "Book",
  new mongoose.Schema({
    author: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    avilable: {
      type: Boolean,
      default: true,
    },
  })
);
module.exports = Book;
