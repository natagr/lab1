// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { IonicModule } from '@ionic/angular';
// import { MyHeaderComponent } from './../my-header/my-header.component';
// import { Position } from './service/Position';
// import { PositionList } from './service/PositionList';
// import { ConfigService } from './service/config.service';
// import { Subscription } from 'rxjs';
// import { Employee } from './service/Employee';
// import { EmployeeList } from './service/EmployeeList';
// import { FirebaseService } from '../firebase.service';

// @Component({
//   selector: 'app-lab10',
//   templateUrl: './lab10.page.html',
//   styleUrls: ['./lab10.page.scss'],
//   standalone: true,
//   imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent]
// })
// export class Lab10Page implements OnInit {
//   positions = new PositionList();
//   private configService = new ConfigService();
//   private subscriptions: Subscription[] = [];
//   employeeList = new EmployeeList(this.configService);
//   position: Position = new Position();
//   count = 0;
//   bdEmployee = 'employees';
//   bdPosition = 'positions';

//   constructor(public fbService: FirebaseService) { }

//   ngOnInit() {

//     this.fetchTask(this.employeeList, true);
//     let taskRes = this.fbService.getRecordList(this.bdEmployee, true);
//     taskRes.snapshotChanges().subscribe()

//     this.fetchTask(this.bdPosition, false);
//     let taskRes1 = this.fbService.getRecordList(this.bdPosition, false);
//     taskRes1.snapshotChanges().subscribe()

//     const positionSub = this.configService.position$
//       .subscribe(() => {
//         this.position = this.configService.position$.value;
//       });
//     this.subscriptions.push(positionSub);
//   }

//   fetchTask(bd: any, op: any) {
//     this.fbService.getRecordList(bd, op).valueChanges().subscribe(res => {
//       console.log(res);
//       if (op) this.employeeList.employeeList = res;
//       else {
//         this.positions.position = res;
//         this.positions = this.positions.position[this.count];
//         this.employeeList.search(this.position.id);
//       }
//     });
//   }

//   nextPosition() {
//     if (this.count < this.positions.position.length - 1) {
//       this.count++;
//     } else {
//       this.count = 0;
//     }
//     this.configService.setPosition(this.positions.position[this.count]);
//   }

//   addEmployee(name: any, employer: any, age: any, salary: any) {
//     let employee = new Employee();
//     employee.name = name;
//     employee.employer = employer;
//     employee.position_id = this.position.id;
//     employee.age = age;
//     employee.salary = salary;

//     this.fbService.createEmployee(employee);
//     this.employeeList.search(this.position.id);
//     this.employeeList.add(employee);
//   }

//   addPosition(position: any, description: any, minSalary: any, maxSalary: any) {
//     let pos = new Position();
//     pos.id = this.positions.position.length + 1;
//     pos.name = position;
//     pos.description = description;
//     pos.minSalary = minSalary;
//     pos.maxSalary = maxSalary;
//     // this.positions.add(pos);
//     this.fbService.createPosition(pos);
//   }

//   ngOnDestroy() {
//     this.subscriptions.forEach(s => s.unsubscribe());
//   }
// }

import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyHeaderComponent } from './../my-header/my-header.component';
import { Position } from './service/Position';
import { PositionList } from './service/PositionList';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';
import { Employee } from './service/Employee';
import { EmployeeList } from './service/EmployeeList';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-lab10',
  templateUrl: './lab10.page.html',
  styleUrls: ['./lab10.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MyHeaderComponent]
})
export class Lab10Page implements OnInit, OnDestroy {
  positions = new PositionList();
  private configService = new ConfigService();
  private subscriptions: Subscription[] = [];
  employeeList = new EmployeeList(this.configService);
  position: Position = new Position();
  count = 0;
  bdEmployee = 'employees';
  bdPosition = 'positions';

  constructor(public fbService: FirebaseService) { }

  ngOnInit() {
    this.fetchTask(this.bdEmployee, true);
    this.fetchTask(this.bdPosition, false);

    const positionSub = this.configService.position$
      .subscribe(() => {
        this.position = this.configService.position$.value;
      });
    this.subscriptions.push(positionSub);
  }

  fetchTask(bd: string, isEmployee: boolean) {
    const listRef = this.fbService.getRecordList(bd, isEmployee);

    listRef.snapshotChanges().subscribe(actions => {
      const items = actions.map(action => {
        const key = action.payload.key;
        const data = action.payload.val();
        return { key, ...data };
      });

      if (isEmployee) {
        this.employeeList.employeeList = items as Employee[];
      } else {
        this.positions.position = items as Position[];
        if (this.positions.position.length > 0) {
          this.position = this.positions.position[this.count];
          this.employeeList.search(this.position.id);
        }
      }
    });
  }

  nextPosition() {
    if (this.count < this.positions.position.length - 1) {
      this.count++;
    } else {
      this.count = 0;
    }
    this.configService.setPosition(this.positions.position[this.count]);
  }

  addEmployee(name: any, employer: any, age: any, salary: any) {
    let employee = new Employee();
    employee.name = name;
    employee.employer = employer;
    employee.position_id = this.position.id;
    employee.age = age;
    employee.salary = salary;

    this.fbService.createEmployee(employee).then(() => {
      this.employeeList.search(this.position.id);
      this.employeeList.add(employee);
    });
  }

  addPosition(positionName: any, description: any, minSalary: any, maxSalary: any) {
    let pos = new Position();
    pos.id = this.positions.position.length + 1;
    pos.name = positionName;
    pos.description = description;
    pos.minSalary = minSalary;
    pos.maxSalary = maxSalary;

    this.fbService.createPosition(pos).then(() => {
      this.positions.position.push(pos);
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}

