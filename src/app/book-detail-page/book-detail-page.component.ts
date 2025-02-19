import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../model/book';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { StarsComponent } from "../stars/stars.component";
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'book-detail-page',
  imports: [CommonModule, MatCardModule, MatListModule, StarsComponent,MatChipsModule],
  templateUrl: './book-detail-page.component.html',
  styleUrl: './book-detail-page.component.css'
})
export class BookDetailPageComponent implements OnInit{
  book: Observable<Book> | undefined;

  constructor(
    private route: ActivatedRoute,
    private service: BooksService
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = parseInt(params['id']);
      if (isNaN(id))
          return;

      this.book = this.service.getDetails(id);
    })
  }


}
