import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stars',
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css',
})
export class StarsComponent implements OnInit {
  @Input()
  note: number| undefined = 0;

  public arrayImagens: number[] = [];

  ngOnInit(): void {
    this.arrayImagens = Array(this.note).fill(0);
  }
}
