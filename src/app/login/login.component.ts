import { Component } from '@angular/core';
import { CourseSystemService } from '../course-system.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 
  UserName: string = '';
  Password: string = '';
  loginError: string = '';

  constructor(private courseSystemService: CourseSystemService) {}

  login(): void {
    if (!this.UserName || !this.Password) {
      this.loginError = 'Please provide both UserName and Password.';
      return;
    }

    this.courseSystemService.login(this.UserName, this.Password) 
      .subscribe(
        (response: any) => {
          console.log('Login successful', response);
        },
        (error: any) => {
          console.error('Login error', error);
          this.loginError = 'Invalid username or password.';
        }
      );
  }
}
 
  


