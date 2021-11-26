class Person {
  constructor() {
    this.firstname = "Eren";
    this.lastname = "Yeager";
  }

  getFullName() {
    console.log(" My Name is " + this.firstname + " " + this.lastname + ".");
  }
}

p1 = new Person();
p1.getFullName();
