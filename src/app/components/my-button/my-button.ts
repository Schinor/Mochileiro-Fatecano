import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-my-button',
  imports: [RouterLink],
  templateUrl: './my-button.html',
  styleUrl: './my-button.css'
})
export class MyButton {
  @Input() buttonText: string = "";
  @Input() routePath: string = '/';
}
