import {Person} from "../interfaces/person"
import {Do} from "../interfaces/do"
import { Show } from "../interfaces/show";
export class Student implements Person, Do {


    name: string;
    score: number;
    grade: number;

    constructor( name: string, score: number, grade: number, shower: Show) {
        this.name = name;
        this.score = score;
        this.grade = grade;
        shower. show("Student "+this.name+ " have an average score "+this.score+ " in the grade "+this.grade)
    }
  
    introduce(): string {
      return `Hello, I'm a student ${this.name}.`;
    }
  
    do(): string {
      return `${this.name} is studying.`;
    }
}  
  