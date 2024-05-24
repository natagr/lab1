import {Person} from "../interfaces/person"

export abstract class Teacher implements Person {

    name: string;
    department: string;

    constructor( name: string,  department: string) {

        this.name = name;
        this.department = department;
    }

    abstract getDepartmentInfo(): string;

  }
  