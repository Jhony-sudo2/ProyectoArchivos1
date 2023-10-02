import { Component, OnInit } from '@angular/core';
import { Reporte1 } from 'src/app/Clases/Reporte1';
import { ReporteService } from 'src/app/servicios/Administrador/reporte.service';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./../../inventcomponent/informacion/informacion.component.css']
})
export class Reporte2Component  implements OnInit{

  constructor(private servicio:ReporteService){}
  
  tipo:number
  reporte1:Reporte1[];
  ngOnInit(): void {
    this.reporte1 = []
  }
  public GenerarReporte() {
    this.servicio.getReporte().subscribe(data => {
      this.reporte1 = data;
    });
  }


}
