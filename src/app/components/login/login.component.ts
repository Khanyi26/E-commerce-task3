import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  //standalone: true,
  //imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  username = '';
  password = '';

  constructor (private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<any>('https://fakestoeapi.com/auth/login', {
      username: this.username,
      password: this.password
    }).subscribe(response => {
      if (response.token) {
        localStorage.setItem('token',response.token); //store token in local storage
        this.router.navigate(['/dashboard']); // Redirect to dashboard
      }
    }, error => {
      console.error("Login Failed",error);
    });
  }

}
