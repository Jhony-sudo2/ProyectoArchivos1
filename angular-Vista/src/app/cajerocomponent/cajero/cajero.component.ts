import { Component } from '@angular/core';
import { CerrarService } from 'src/app/servicios/cerrar.service';

@Component({
  selector: 'app-cajero',
  templateUrl: './cajero.component.html',
  styleUrls: ['./cajero.component.css']
})
export class CajeroComponent {
  constructor(private servicio:CerrarService){}

  public CerrarSesion(){
    this.servicio.cerrarSesion();
  }

}
