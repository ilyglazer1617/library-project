const express = require("express");
const Joi = require("joi");
const Book = require("./libraryExercise/bookConstractor");
const routerBook = express.Router();

//!get all books
routerBook.get("/", async (req, res) => {
  try {
    const books = await Book.find().sort("name");
    res.status(200).send(books);
  } catch (error) {
    res.status(400).send(error);
  }
});

//! get book by id

routerBook.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
//! add book

routerBook.post("/", async (req, res) => {
  try {
    bookVlidation(req.body);
    let book = new Book({
      author: req.body.author,
      name: req.body.name,
    });
    book = await book.save(book);
    res.status(200).send(book);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
//! change books info

routerBook.put("/:id", async (req, res) => {
  try {
    bookVlidation(req.body);
    let updateBook = await Book.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...req.body },
      },
      { new: true }
    );
    res.status(200).send(updateBook);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
//! delete by id

routerBook.delete("/:id", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.id);
    res.status(200).send(req.params.id);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
//!delete all books

routerBook.delete("/", async (req, res) => {
  try {
    await Book.deleteMany({}, res.status(200).send("all deleted"));
  } catch (error) {
    res.status(400).send(error.message);
  }
});
function bookVlidation(book) {
  const schema = {
    author: Joi.string().required(),
    name: Joi.string().required(),
  };
  return Joi.validate(book, schema);
}
module.exports = routerBook;
