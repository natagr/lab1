import { Show_Console } from './show_console';
import { Show_Desktop } from './show_desktop';
import { DepartmentHead } from './departmentHead';
import { Student } from './student';

describe('Student and DepartmentHead Testing', () => {
  let shower: Show_Console;
  let shower1: Show_Desktop;
  let student: Student;
  let departmentHead: DepartmentHead;

  beforeEach(() => {
    shower = new Show_Console();
    shower1 = new Show_Desktop();
    student = new Student("Student1", 15, 3, shower);
    departmentHead = new DepartmentHead("DepartmentHead1", "Department of Foreign Languages", shower);
  });


  it("Створення екземпляру класу Shower", () => {
    expect(shower).toBeTruthy();
  });

  it("Створення екземпляру класу Shower Desktop", () => {
    expect(shower1).toBeTruthy();
  });

  it("Створення екземпляру класу Student", () => {
    expect(student).toBeTruthy();
  });

  it("Створення екземпляру класу DepartmentHead", () => {
    expect(departmentHead).toBeTruthy();
  });
});
