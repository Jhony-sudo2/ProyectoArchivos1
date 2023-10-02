import { Component } from '@angular/core';
import { CerrarService } from '../servicios/cerrar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./../cajerocomponent/cajero/cajero.component.css']
})
export class AdminComponent {
  constructor(private servicio:CerrarService){}

  public CerrarSesion(){
    this.servicio.cerrarSesion();
  }


}
