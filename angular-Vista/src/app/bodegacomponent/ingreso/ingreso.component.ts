import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from 'src/app/Clases/Empleado';
import { Invetario } from 'src/app/Clases/Inventario';
import { BodegaService } from 'src/app/servicios/Bodega/bodega.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./../../login/login.component.css']
})
export class IngresoComponent {

  constructor(private servicio:BodegaService,private cookie:CookieService){}
  invetario:Invetario = new Invetario()
  empleado:Empleado = JSON.parse(this.cookie.get('Empleado'))


  public AgregarAInvetario(){
    this.invetario.sucursal = this.empleado.sucursal
    this.servicio.AgregarAInventario(this.invetario);
  }


}
