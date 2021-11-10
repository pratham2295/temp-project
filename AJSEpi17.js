class Employee {
  constructor() {
    this.salary = 65000;
  }
  getSalary() {
    console.log(this.salary);
  }
}

class contractEmployee extends Employee {
  constructor() {
    super();
    this.contractperiod = "2 years";
  }

  getContractEmployeeSalary() {
    console.log(this.salary);
  }

  getContractPeriod() {
    console.log(this.contractperiod);
  }
}

c1 = new contractEmployee();
c1.getContractEmployeeSalary();
c1.getContractPeriod();
