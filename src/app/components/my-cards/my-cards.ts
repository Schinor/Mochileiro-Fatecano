import { Component, Input } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-my-cards',
  imports: [NgStyle],
  templateUrl: './my-cards.html',
  styleUrl: './my-cards.css'
})
export class MyCards {
  @Input() CardText: string = "";
  @Input() CardColor: string = "#FFFF";

  constructor() { }
}
