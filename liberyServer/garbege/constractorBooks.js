class Books {
  //תבנית של הספרים
  constructor(id, author, name) {
    this.id = id;
    this.author = author;
    this.name = name;
    this.avilable = true;
  }
  rent() {
    if (this.avilable == false) {
      throw new Error("the book isnt avilable");
    }
    this.avilable = false;
  }

  returnBook() {
    if (this.avilable == true) {
      throw new Error("the book is in order");
    }
    this.avilable = true;
  }
}
