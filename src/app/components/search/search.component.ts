import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/common/book';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }  

  searchBooks(keyword: string){
    console.log('keyword', keyword);
    this._router.navigateByUrl('/search/'+keyword);
  }
  searchDescriptionBooks(keyword1: string){
    console.log('keyword', keyword1);
    this._router.navigateByUrl('/search1/'+keyword1);
  }
}
