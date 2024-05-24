import {Teacher} from "../classes/teacher"
import {Do} from "../interfaces/do"
import {Show } from "../interfaces/show";
import {Random} from "../classes/random";
export class DepartmentHead extends Teacher implements Do {
    
    get activity() {
        let rnd = new Random();
        let t = rnd.getRandomInt(3); 
        if (t === 0) {
            return `${this.name} is overseeing administrative duties.`;
        } else if (t === 1) {
            return `${this.name} is preparing the curriculum.`;
        } else {
            return `${this.name} is leading a faculty meeting.`;
        }
    }
    
    constructor(name: string, department: string, shower: Show) {
        super(name, department);
        shower.show(` ${this.name} is Department Head of ${this.department}\n ${this.activity}`);
    }

    do(): string {
        return `${this.name} is managing the department and teaching.`;
    }

    getDepartmentInfo(): string {
        return `Head of the Department of ${this.department}`;
    }


 


  }
  