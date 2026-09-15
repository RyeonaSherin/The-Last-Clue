import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  detectiveId = '';
  password = '';
  showPassword = false;
  errorMessage = '';

  constructor(private router: Router) {}

login() {
  if (this.detectiveId === 'Ryeona' && this.password === 'noir123') {
    this.errorMessage = '';
    this.router.navigate(['/dashboard']);
  } else {
    this.errorMessage = 'Invalid detective credentials.';
  }
}
}