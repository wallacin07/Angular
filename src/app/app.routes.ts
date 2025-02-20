import { Routes } from '@angular/router';
import { BookPageComponent } from './page/book-page/book-page.component';
import { BookDetailPageComponent } from './page/book-detail-page/book-detail-page.component';

export const routes: Routes = [
  {path: '', component: BookPageComponent},
  {path:'book/:id', component: BookDetailPageComponent}
];
