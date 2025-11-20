import { Component, signal } from '@angular/core';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DataBindingDemoComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('data-binding-demo');
}
