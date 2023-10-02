import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CerrarService {

  constructor(private router: Router, private cookieService: CookieService) { }

  cerrarSesion() {
    this.cookieService.delete('Usuario'); 
    this.cookieService.delete('Empleado');
    this.router.navigate(['/']); 
  }
}
