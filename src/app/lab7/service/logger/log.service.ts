import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LogService{
    constructor(){}
    write(logmesssage: string){
        console.log(logmesssage);
    }
}