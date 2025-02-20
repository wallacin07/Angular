import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { BookData, BooksService } from '../../books.service';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BookItemComponent } from "../../components/book-item/book-item.component";
import { StarsComponent } from "../../components/stars/stars.component";

@Component({
  selector: 'book-page',
  imports: [MatPaginatorModule, MatSelectModule, CommonModule, BookItemComponent],
  templateUrl: './book-page.component.html',
  styleUrl: './book-page.component.css',
})
export class BookPageComponent implements OnInit, AfterViewInit {
  books: Observable<BookData> | undefined

  limitDefault = 10;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private service: BooksService) // private router: Router
  {}
  ngAfterViewInit(): void {
    // this.paginator.
  }




  ngOnInit(): void {
    this.books = this.service.search('', 1, this.limitDefault)
  }

  changePage(event: PageEvent) {
    if ( this.paginator?.pageIndex !== undefined) {
      this.books = this.service.search('', this.paginator?.pageIndex, this.paginator?.pageSize)
    }
  }
}
