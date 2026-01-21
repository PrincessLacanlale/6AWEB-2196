import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from './employee';
import { ProductsService } from './products.service'; // Import the new service

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html', // Fixed filename to match your sidebar
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('ng-services-demo');

  public employees: any[] = [];
  public products: any[] = []; // Array for products

  constructor(
    private _employeeService: Employee,
    private _productsService: ProductsService // Inject product service
  ) {}

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.products = this._productsService.getProducts(); // Fetch product data
  }
}
