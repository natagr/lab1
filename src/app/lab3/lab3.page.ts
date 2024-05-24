import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-lab3',
  templateUrl: './lab3.page.html',
  styleUrls: ['./lab3.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class Lab3Page implements OnInit {

  books: any = [];

  authorSurname: string = '';
 
  dataUrl = 'https://api.jsonbin.io/v3/b/65e757061f5677401f38dc63';
 
  loading: any;

  showDetails: boolean[] = new Array(1000).fill(false);

  constructor(public loadingController: LoadingController) {}

  async loadBooks() {
    this.loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'Loading...'
    });
    await this.loading.present();

    fetch(this.dataUrl)
      .then(response => response.json())
      .then(json => {
        this.books = Object.values(json.record);
        this.showDetails = this.books.map(() => false);
        this.loading.dismiss();
      })
      .catch(error => {
        console.error('Error loading books:', error);
        this.loading.dismiss();
      });
  }


  getColor(author: string) {
    return author === this.authorSurname ? 'red' : ''; 
  }


  toggleDetails(i: number) {
    if (this.showDetails[i]) {
      this.showDetails[i] = false;
    } else {
      this.showDetails[i] = true;
    }
  }

  ngOnInit() {
    
  }
  

}
