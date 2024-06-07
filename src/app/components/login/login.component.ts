import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private loginService: LoginService) { }

  username: string = '';
  password: string = '';


  login() {
    
    if (this.loginService.login(this.username, this.password)) {
      this.router.navigate(['/stats']);
    } else {
      alert('Inicio de sesión fallido');
    }
    
  }
  

}
