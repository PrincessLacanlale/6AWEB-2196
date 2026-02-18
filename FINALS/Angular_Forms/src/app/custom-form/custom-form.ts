import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './custom-form.html',
  styleUrl: './custom-form.css',
})
export class CustomForm {
  eventForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.eventForm = this.fb.group({
      // Custom fields different from the demo
      eventTitle: ['', [Validators.required, Validators.minLength(5)]],
      attendeeEmail: ['', [Validators.required, Validators.email]],
      ticketType: ['', Validators.required],
      specialRequests: [''],
      agreeToTerms: [false, Validators.requiredTrue] // validation for checkbox
    });
  }

  // Helper for template validation
  isInvalid(controlName: string) {
    const control = this.eventForm.get(controlName);
    return control?.touched && control?.invalid;
  }

  onSubmit() {
    if (this.eventForm.valid) {
      this.submitted = true;
      console.log('Event Registration Data:', this.eventForm.value);
    } else {
      this.eventForm.markAllAsTouched();
    }
  }
}
