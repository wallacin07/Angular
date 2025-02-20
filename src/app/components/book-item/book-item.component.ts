import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../../model/book';
import { MatChipsModule } from '@angular/material/chips';
import { StarsComponent } from '../stars/stars.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'book-item',
  imports: [CommonModule, MatCardModule, MatListModule, MatChipsModule, StarsComponent],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent implements OnChanges {

  @Input()
  book: Book | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.book)
  }

  // constructor( private router : Router){}




}
