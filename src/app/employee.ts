import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  // Add this method to store and return the employee data
  getEmployees() {
    return [
      {
        id: 101,
        firstname: 'Joseph',
        lastname: 'Dizon',
        email: 'jdizon@hau.edu.ph',
      },
      {
        id: 102,
        firstname: 'James',
        lastname: 'Atienza',
        email: 'jatienza@hau.edu.ph',
      },
      {
        id: 103,
        firstname: 'John',
        lastname: 'Cena',
        email: 'jcena@hau.edu.ph',
      },
      {
        id: 104,
        firstname: 'Robert',
        lastname: 'Quintana',
        email: 'rquintana@hau.edu.ph',
      },
      // REMINDER: Add your own name as the 5th entry here for the lab requirement
      {
        id: 105,
        firstname: 'Princess',
        lastname: 'Lacanlale',
        email: 'pflacanlale@student.hau.edu.ph',
      }
    ];
  }
}
