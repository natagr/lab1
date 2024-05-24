import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Position } from './Position';
import { PositionList } from './PositionList';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentPosition = DEFAULT_POSITION;

  position$: BehaviorSubject<Position> = new BehaviorSubject<Position>(DEFAULT_POSITION);
  
  setPosition(position: Position) {
    console.log("Є зміни!!!");
    
    this.position$.next(position);
  }

  constructor() {}
}

// const positionList = new PositionList();

// const DEFAULT_POSITION = positionList.position.get(0);

const DEFAULT_POSITION = {"id": 1, "name": "CEO", "description": "poisition", "minSalary": 1000, "maxSalary": 10000}