


import { Position } from "./Position";
export class PositionList {
  position = new Array();

  constructor() {
    // this.position.set(0, { id: 0, name: "CEO", description: "Chief Executive Officer", minSalary: 10000, maxSalary: 20000 });
    // this.position.set(1, { id: 1, name: "Manager", description: "Department Manager", minSalary: 6000, maxSalary: 10000 });
    // this.position.set(2, { id: 2, name: "Clerk", description: "Office Clerk", minSalary: 3000, maxSalary: 6000 });
  }

  add(position: Position) {
    this.position.push(position.id, {
      // id: position.id,
      // name: position.name,
      // description: position.description,
      // minSalary: position.minSalary,
      // maxSalary: position.maxSalary
    });
  }
}