import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  standalone: true,
imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  // Controls whether the Investigator Form is visible
  showForm = false;

  // Reactive Form
  investigatorForm: FormGroup;

  constructor(private fb: FormBuilder) {

this.investigatorForm = this.fb.group({
  name: ['', Validators.required],
  detectiveId: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  specialization: ['', Validators.required],
  experience: ['', Validators.required]
});

  }

  // Open / close Investigator Form
  toggleForm() {
    this.showForm = !this.showForm;
  }

  // Submit Reactive Form
  submitForm() {

    if (this.investigatorForm.valid) {

      console.log(
        'Investigator Details:',
        this.investigatorForm.value
      );

      alert('Investigator profile saved successfully!');

      this.showForm = false;

    } else {

      this.investigatorForm.markAllAsTouched();

    }

  }
emails = [''];

addEmail() {
  this.emails.push('');
}

removeEmail(index: number) {
  if (this.emails.length > 1) {
    this.emails.splice(index, 1);
  }
}
scrollToCases() {
  document.getElementById('cases')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
}