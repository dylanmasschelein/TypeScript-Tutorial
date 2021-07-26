abstract class Department {
  //   private readonly id: string;
  //   private name: string; // public keyword is the default and allows variables to be accessed outside the class
  protected employees: string[] = []; // like private but not only available in this calls but any class thats extended from that class

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
    // this.id = 2; -- readonly so will not allow
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admin: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class Accounting extends Department {
  private static instance: Accounting;
  private constructor(id: string, private reports: string[]) {
    // private ensure only one object instance can be created of the constructor
    super(id, "AC");
  }

  // method eo enusre there is only once instance of the department
  static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new Accounting("d2", []);
      return this.instance;
    }
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Dylan") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }
}

const development = new ITDepartment("id1", ["Dylan"]);
// const accounting = new Accounting("id2", []);
// accounting.addReport("something went wrong");

development.addEmployee("Dylan");
development.addEmployee("Matt");

const emplyoee1 = Department.createEmployee("Dylan");
console.log(emplyoee1);

// accounting.describe();

// development.employees[2] = "Anna"; -- Compliation error thanks to making the employees private

// console.log(development);
// console.log(accounting);
// development.describe();
// const developmentCopy = { name: "Accounting", describe: development.describe };

// developmentCopy.describe();

// TAKEAWAYS
// Keywords: private, public, protected
// typecheck inside the constructor for shortest/cleanest code
// Can also set private/protected inside the constructor
// abstract ensures all inherited classes have that function but will need to be defined in each different inherieted classes (describe method)
