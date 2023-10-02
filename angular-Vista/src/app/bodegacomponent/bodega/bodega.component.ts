import { Component, OnInit, numberAttribute } from '@angular/core';
import { CerrarService } from 'src/app/servicios/cerrar.service';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./../../cajerocomponent/cajero/cajero.component.css']
})
export class BodegaComponent implements OnInit{

  constructor(private servicio:CerrarService){}

  ngOnInit(): void {
      
  }

  public CerrarSesion(){
    this.servicio.cerrarSesion();
  }

}
