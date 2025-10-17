import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { MyButton } from "../my-button/my-button";
import { RouterLink } from "@angular/router";
import { MyCards } from '../my-cards/my-cards';

@Component({
  selector: 'app-home',
  imports: [Navbar, RouterLink, MyButton, MyCards],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
