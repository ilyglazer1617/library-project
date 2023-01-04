class Customer {
  constructor(id, name, phonenumber) {
    this.id = id;
    this.name = name;
    this.phonenumber = phonenumber;
    this.rentedBooks = [];
  }
  rentBook(id) {
    if (this.rentedBooks.includes(id) == true)
      throw new Error("you allredy have this book");
    this.rentedBooks.push(id);
  }
  returnBook(id) {
    if (this.rentedBooks.includes(id) == false)
      throw new Error("you dont have this book");
    const index = this.rentedBooks.findIndex(id);
    this.rentedBooks.splice(index, 1);
    console.log("returned book");
  }
  setPhoneNumber(phonenumber) {
    if (this.phonenumber == phonenumber)
      throw new Error("this phone number is like the old one");
    this.phonenumber = phonenumber;
  }
}

module.exports = Customer;
