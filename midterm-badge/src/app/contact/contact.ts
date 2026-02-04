import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    alert('Thank you, ' + this.contact.name + '! Your message has been sent.');
  }
}
