import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Book } from './common/book';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  open: boolean;
  
  constructor() {
  }

  prueba() {
    this.open = !this.open;
    console.log(this.open);
  }

  ngOnInit() {
    this.open = true;
  }
  

}
