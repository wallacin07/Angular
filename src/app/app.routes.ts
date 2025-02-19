import { Routes } from '@angular/router';
import { BookPageComponent } from './book-page/book-page.component';
import { BookDetailPageComponent } from './book-detail-page/book-detail-page.component';

export const routes: Routes = [
  {path: '', component: BookPageComponent},
  {path:'book/:id', component: BookDetailPageComponent}
];
