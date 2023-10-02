import { Component } from '@angular/core';
import { CerrarService } from 'src/app/servicios/cerrar.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./../../cajerocomponent/cajero/cajero.component.css']
})
export class InventarioComponent {
  constructor(private servicio:CerrarService){}

  public CerrarSesion(){
    this.servicio.cerrarSesion();
  }

}
