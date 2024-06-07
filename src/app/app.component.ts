import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tfg-font';

  loggedIn: boolean = false;

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
     this.loggedIn = true;
    }
  }
}
