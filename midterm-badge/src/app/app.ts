import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// IMPORTANT: You must import these three for the navbar to work
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Add them to your imports array here
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Community Portal';
}
