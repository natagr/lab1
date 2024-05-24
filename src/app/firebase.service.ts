// import { Injectable } from '@angular/core';
// import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
// import { Employee } from './lab10/service/Employee';
// import { Position } from './lab10/service/Position';

// @Injectable({
//   providedIn: 'root'
// })
// export class FirebaseService {
//   employeeListRef?: AngularFireList<any>;
//   positionListRef?: AngularFireList<any>;
//   bdRef?: AngularFireObject<any>;
 
//   constructor(private db: AngularFireDatabase) { }
 
//   createEmployee(employee: Employee) {
//     return this.employeeListRef?.push({
//       position_id: employee.position_id,
//       name: employee.name,
//       employer: employee.employer,
//       age: employee.age,
//       salary: employee.salary
//     });
//   }
 
//   createPosition(position: Position) {
//     return this.positionListRef?.push({
//       id: position.id,
//       name: position.name,
//       description: position.description,
//       minSalary: position.minSalary,
//       maxSalary: position.maxSalary
//     });
//   }

//   getRecord(id: string, bd: string) {
//     this.bdRef = this.db.object(`/${bd + id}`);
//     console.log("bdRef=" + this.bdRef.snapshotChanges());
//     return this.bdRef;
//   }

//   getRecordList(bd: string, op: boolean) {
//     if (op) {
//       this.employeeListRef = this.db.list(`/${bd}`);
//       return this.employeeListRef;
//     } else {
//       this.positionListRef = this.db.list(`/${bd}`);
//       return this.positionListRef;
//     }
//   }
  
 
//   updateEmployee(id: number, employee: Employee, bd: string) {
//     this.bdRef = this.db.object(`/${bd}/${id}`);
//     return this.bdRef.update({
//       position_id: employee.position_id,
//       name: employee.name,
//       employer: employee.employer,
//       age: employee.age,
//       salary: employee.salary
//     });
//   }

//   updatePosition(id: number, position: Position, bd: string) {
//     this.bdRef = this.db.object(`/${bd}/${id}`);
//     return this.bdRef.update({
//       id: position.id,
//       name: position.name,
//       description: position.description,
//       minSalary: position.minSalary,
//       maxSalary: position.maxSalary
//     });
//   }

//   deleteRecord(id: string, bd: string) {
//     this.bdRef = this.db.object(`/${bd}/${id}`);
//     this.bdRef.remove();
//   }
// }

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Employee } from './lab10/service/Employee';
import { Position } from './lab10/service/Position';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  employeeListRef!: AngularFireList<any>;
  positionListRef!: AngularFireList<any>;
  bdRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createEmployee(employee: Employee) {
    return this.employeeListRef.push({
      position_id: employee.position_id,
      name: employee.name,
      employer: employee.employer,
      age: employee.age,
      salary: employee.salary
    });
  }

  createPosition(position: Position) {
    return this.positionListRef.push({
      id: position.id,
      name: position.name,
      description: position.description,
      minSalary: position.minSalary,
      maxSalary: position.maxSalary
    });
  }

  getRecord(id: string, bd: string) {
    this.bdRef = this.db.object(`/${bd}/${id}`);
    return this.bdRef;
  }

  getRecordList(bd: string, isEmployee: boolean): AngularFireList<any> {
    if (isEmployee) {
      this.employeeListRef = this.db.list(`/${bd}`);
      return this.employeeListRef;
    } else {
      this.positionListRef = this.db.list(`/${bd}`);
      return this.positionListRef;
    }
  }

  updateEmployee(id: number, employee: Employee, bd: string) {
    this.bdRef = this.db.object(`/${bd}/${id}`);
    return this.bdRef.update({
      position_id: employee.position_id,
      name: employee.name,
      employer: employee.employer,
      age: employee.age,
      salary: employee.salary
    });
  }

  updatePosition(id: number, position: Position, bd: string) {
    this.bdRef = this.db.object(`/${bd}/${id}`);
    return this.bdRef.update({
      id: position.id,
      name: position.name,
      description: position.description,
      minSalary: position.minSalary,
      maxSalary: position.maxSalary
    });
  }

  deleteRecord(id: string, bd: string) {
    this.bdRef = this.db.object(`/${bd}/${id}`);
    this.bdRef.remove();
  }
}
