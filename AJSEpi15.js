class Employee {
  constructor() {
    this.salary = 100000;
    this.paidleaves = 21;
    this.sickleaves = 15;
  }

  getAnnualSalary() {
    console.log(this.salary * 12);
  }

  getPaidLeaves() {}

  getSickLeaves() {}
}

e1 = new Employee();
e1.getAnnualSalary();
