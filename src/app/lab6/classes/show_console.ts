import {Show} from "../interfaces/show"
export class Show_Console implements Show{
    show(s: string): void {
        console.log(s);
    }
}