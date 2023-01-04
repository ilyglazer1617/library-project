class Worker {
  constructor(id, name, phonenumber, activ, hourlyRate) {
    this.id = id;
    this.name = name;
    this.phonenumber = phonenumber;
    this.activ = activ;
    this.hourlyRate = hourlyRate; //[hourlyRate];
  }
  raise(id) {
    this.hourlyRate = this.hourlyRate * 2;
  }
  fire() {
    if (this.activ === false) {
      throw new Error("this empolye is not activ any more");
    }
    this.activ = false;
  }
  setPhoneNumber(phonenumber) {
    if (this.phonenumber === phonenumber)
      throw new Error("this phone number is like the old one");
    this.phonenumber = phonenumber;
  }
}
module.exports = Worker;
