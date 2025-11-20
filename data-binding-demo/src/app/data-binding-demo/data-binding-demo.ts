import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding-demo.html',
  styleUrls: ['./data-binding-demo.css']
})
export class DataBindingDemoComponent {
  title = 'Angular Data Binding Demo';
  description = 'Interpolation + Property + Event + Two-way binding';

  imageUrl = 'favicon.ico';
  textColor = 'blue';
  count = 0;
  yourName = '';
  
  isHighlighted = true;
  
  increase() {
    this.count++;
  }
  decrease() {
  this.count--;
}

}
