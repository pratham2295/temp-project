class Car {
  constructor() {
    this.carname = "BMW";
  }

  carName() {
    this.carname = "Ford";
    //console.log(this.carName);
  }
}

c1 = new Car();
console.log(c1.carname);
c1.carName();
