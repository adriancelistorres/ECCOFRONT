import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {
  constructor(
    private _router: Router,
  ) { }
  cerrarSesion(): void {
    localStorage.removeItem('token');
    this._router.navigate(['/authIn']);
  }
}
