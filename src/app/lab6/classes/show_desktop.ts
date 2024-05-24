import {Show} from "../interfaces/show"
export class Show_Desktop implements Show{
    info: string = "";
    show(s: string): void {
        this.info = "info about person: " + s;
    }
}