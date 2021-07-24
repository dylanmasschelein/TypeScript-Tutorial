class Department {
  //   private readonly id: string;
  //   private name: string; // public keyword is the default and allows variables to be accessed outside the class
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
    // this.id = 2; -- readonly so will not allow
  }

  printEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const development = new Department("id1", "Development");

development.addEmployee("Dylan");
development.addEmployee("Matt");

// development.employees[2] = "Anna"; -- Compliation error thanks to making the employees private

console.log(development);

// development.describe();
const developmentCopy = { name: "Accounting", describe: development.describe };

// developmentCopy.describe();
