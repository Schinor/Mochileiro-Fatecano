import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyButton } from '../my-button/my-button';

@Component({
  selector: 'app-login',
  imports: [RouterLink, MyButton],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
