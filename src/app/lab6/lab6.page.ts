import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyHeaderComponent } from './../my-header/my-header.component';
import {Student} from "./classes/student"
import {Show_Console} from "./classes/show_console"
import {Show_Desktop} from "./classes/show_desktop"
import {DepartmentHead} from "./classes/departmentHead"
@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent],
  
})
export class Lab6Page implements OnInit {

  show: string = '';

  constructor() { }

  ngOnInit() {
  }


  ras(){
    let show_con = new Show_Console();
    let show_desk = new Show_Desktop();
    let student = new Student('Student1', 9, 6, show_desk);
    this.show = show_desk.info;
    console.log(student.do());
    let departmentHead = new DepartmentHead('DepartmentHead1', "Department of Foreign Languages", show_desk);
    this.show = this.show + "\n" +show_desk.info;
    console.log(departmentHead.do());
  }


}
