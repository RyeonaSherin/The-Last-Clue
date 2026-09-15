import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-investigator-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './investigator-form.html',
  styleUrl: './investigator-form.css'
})
export class InvestigatorForm {

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

  submitForm() {

    if (this.investigatorForm.valid) {
      console.log(this.investigatorForm.value);
      alert('Investigator profile created successfully!');
    } else {
      this.investigatorForm.markAllAsTouched();
    }

  }
}