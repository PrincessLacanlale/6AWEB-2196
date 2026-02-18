import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reactive-demo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-demo.html',
  styleUrl: './reactive-demo.css'
})
export class ReactiveDemo {
  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_]{4,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/)]],
      role: ['', Validators.required], // Matches the Template-Driven version
      gender: ['', Validators.required],
      status: ['', Validators.required],
      comments: ['']
    });
  }

  // Helper to check for errors in the template
  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }

  onSubmit() {
    if (this.form.valid) {
      this.submitted = true;
      console.log('Reactive Form Data:', this.form.value);
    } else {
      // Highlights all fields if user clicks submit on an empty form
      this.form.markAllAsTouched();
    }
  }
}
