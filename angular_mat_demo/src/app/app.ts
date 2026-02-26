import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// 1. Import the Register component from its folder
import { Register } from './register/register'; 

@Component({
  selector: 'app-root',
  standalone: true, // Ensure this is here
  // 2. Add Register to this array
  imports: [RouterOutlet, Register], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular_mat_demo');
}