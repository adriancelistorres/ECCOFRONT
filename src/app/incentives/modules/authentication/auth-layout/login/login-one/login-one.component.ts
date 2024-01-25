import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IIncentivoPago } from '../../../../../models/IIncentivosPago';
import { IncentivesService } from '../../../../../services/incentives.service';
import { IncentiveTriggerService } from '../../../../../core/triggers/incentive-trigger.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-one',
  templateUrl: './login-one.component.html',
  styleUrl: './login-one.component.css'
})
export class LoginOneComponent {
  listIncentivos: IIncentivoPago[] = [];
  usuario: string = ''; // Variable para capturar el usuario
  clave: string = '';   // Variable para capturar la contraseña
  isLoading: boolean = false;
  
  constructor(
    private _incentivosServices: IncentivesService,
    private _router: Router,
    private _disparadorDNI:IncentiveTriggerService
  ){
    
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
    localStorage.removeItem('token'); // Borra el token al cargar la página del inicio de sesión
    } else {
      console.log('')
    }
  }

  testt(){
    this._router.navigate(['mainIn']);
  }

  login(event: Event): void {
    event.preventDefault();

    if (!this.usuario || !this.clave) {
      return;
    }
    this.isLoading = true; // Activar el spinner

    this._incentivosServices.login(this.usuario, this.clave).subscribe(
      () => {
        // Redirigir al componente de incentivos con el dni en los queryParams
        this._router.navigate(['mainIn/incentives']);
        this._disparadorDNI.disparadorDNI.emit({data:this.usuario});
      },
      error => {
        console.error('Error al iniciar sesión:', error);

        if (error && error.error === "Usuario no encontrado o datos inválidos.") {
          Swal.fire({
            icon: 'error',
            title: 'Error de inicio de sesión',
            text: 'Usuario no encontrado o datos inválidos.'
          });
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Error de inicio de sesión',
            text: 'Hubo un error al iniciar sesión. Por favor, intenta nuevamente.'
          });
        }
      }
    ).add(() => this.isLoading = false); // Desactivar el spinner
  }

  onlyNumbers(event: KeyboardEvent): void {
    const keyCode = event.keyCode;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
      event.preventDefault();
    }
   }

}
