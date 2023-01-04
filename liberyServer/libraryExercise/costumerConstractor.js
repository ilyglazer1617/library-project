const mongoose = require("mongoose");

const Costomer = new mongoose.model(
  "Costumer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      min: 3,
      max: 255,
      match: /.*'@'.*/,
    },
  })
);

// Name: string required chars 3-50
// Email string required chars 3-255 contains @
// Password: string min5 max 15 required
// phoneNumber : string starts with ’+‘ and contains 13 chars
// RentedBooks array of string default empty array
