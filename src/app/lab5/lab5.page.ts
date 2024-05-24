import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-lab5',
  templateUrl: './lab5.page.html',
  styleUrls: ['./lab5.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab5Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
