import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MyButton } from '../my-button/my-button';

@Component({
  selector: 'app-register',
  imports: [RouterLink, MyButton],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {

}
