import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

// CHALLENGE ADDITIONS: 3 New Components
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule, ReactiveFormsModule, MatButtonModule, MatNativeDateModule, 
    MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule, 
    MatSliderModule, MatCardModule, MatIconModule, MatToolbarModule,
    MatSlideToggleModule, MatDividerModule, MatSelectModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css',
  providers: [DatePipe]
})
export class Register {
  // Theme state
  isDarkMode = true;

  // Challenge: Birth year 2006 or below
  maxDate: Date = new Date(2006, 11, 31); 

  submitted = false;
  userData: any;

  formdata: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      // Challenge: Starts with letter, only alphanumeric
      Validators.pattern(/^[a-zA-Z][a-zA-Z0-9]*$/) 
    ]),
    gender: new FormControl('', [Validators.required]),
    birthDate: new FormControl(null, [Validators.required]),
    skillLevel: new FormControl(5),
    role: new FormControl('') // Using MatSelect here
  });

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

  onClickSubmit(data: any) {
    this.submitted = true;
    this.userData = data;
  }
}