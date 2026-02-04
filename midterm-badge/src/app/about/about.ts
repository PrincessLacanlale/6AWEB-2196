import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for pipes

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  // Property required for your DatePipe in the HTML
  today: number = Date.now();
}
