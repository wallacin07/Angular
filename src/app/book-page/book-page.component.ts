import { Component, OnInit } from '@angular/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BookData, BooksService } from '../books.service';
import {MatSelectModule} from '@angular/material/select';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'book-page',
  imports: [MatPaginatorModule,MatSelectModule],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css'
})
export class BookPageComponent implements OnInit {
    book: Observable<BookData> | undefined;

    limitDefault = 10
    limit = 0
    page = 0
    constructor(
      private service: BooksService,
      private router: Router
      ){}


  ngOnInit(): void {
    this.book = this.service.search('',1,this.limitDefault)
  }

  getNextPage(){}

}
