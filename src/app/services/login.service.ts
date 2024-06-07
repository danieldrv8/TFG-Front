import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor() { }

  login(username: string, password: string): boolean {
    // Simular la lógica de inicio de sesión.
    if (username === 'usuario' && password === 'contraseña') {
      const token = 'TOKEN'; // Simular el token de sesión
      localStorage.setItem('token', token); // Guardar el token en localStorage
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('token'); // Eliminar el token de localStorage
  }

  checkLogin(): boolean {
    let response = false;
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } 
    return response;
  }
}
