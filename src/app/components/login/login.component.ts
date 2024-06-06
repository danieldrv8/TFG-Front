import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router) { }

  username: string = '';
  password: string = '';

  login() {
    // Simular la lógica de inicio de sesión.
    if (this.username === 'usuario' && this.password === 'contraseña') {
      alert('Inicio de sesión exitoso');
    } else {
      this.router.navigate(['/login']);
    }
  }

}
