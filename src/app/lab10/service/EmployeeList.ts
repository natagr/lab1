

import { Employee } from "./Employee";
import { ConfigService } from "./config.service";
export class EmployeeList {
  employeeList = new Array();
  searchEmployee = new Array();
  // searchEmployeeResult: string[] = [];

  totalEmployees: number = 0;
  averageSalary: number = 0;

  positionSub = this.configService.position$.subscribe(() => {
    let position = this.configService.position$.value;
    this.search(position.id);
  });

  constructor(private configService: ConfigService) {
    // let employee = new Employee();
    // employee.name = "Bob";
    // employee.position_id = 0;
    // employee.employer = "Bob Employer";
    // employee.age = 30;
    // employee.salary = 5000;
    // this.add(employee);

    // let employee1 = new Employee();
    // employee1.name = "Ken";
    // employee1.position_id = 1;
    // employee1.employer = "Ken Employer";
    // employee1.age = 35;
    // employee1.salary = 6000;
    // this.add(employee1);

    // let employee2 = new Employee();
    // employee2.name = "Sam";
    // employee2.position_id = 2;
    // employee2.employer = "Sam Employer";
    // employee2.age = 40;
    // employee2.salary = 7000;
    // this.add(employee2);

    // this.search(0);
  }

  add(employee: Employee) {
    this.employeeList.push(employee);
    this.search(employee.position_id);
    this.totalEmployees = this.employeeList.length;
    this.calculateAverageSalary();
  }

  search(position_id: number) {
    this.searchEmployee = this.employeeList.filter(employee => {
      return employee.position_id === position_id;
    });
    // this.searchEmployeeResult = [];
    // this.searchEmployee.forEach(el => {
    //   this.searchEmployeeResult.push('Назва: ' + el.name);
    //   this.searchEmployeeResult.push('Роботодавець: ' + el.employer);
    //   this.searchEmployeeResult.push('Вік: ' + el.age);
    //   this.searchEmployeeResult.push('Зарплата: ' + el.salary);
    // });
  }

  calculateAverageSalary() {
    let totalSalary = 0;
    this.employeeList.forEach(employee => {
      totalSalary += Number(employee.salary);
    });
    this.averageSalary = Number(totalSalary) / Number(this.totalEmployees);
  }
}