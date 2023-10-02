import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from 'src/app/Clases/Empleado';
import { Estante } from 'src/app/Clases/Estante';
import { InventarioService } from 'src/app/servicios/Inventario/inventario.service';

@Component({
  selector: 'app-estante',
  templateUrl: './estante.component.html',
  styleUrls: ['./../../login/login.component.css']
})
export class EstanteComponent {

  constructor(private servicio:InventarioService,private cookie:CookieService){}
  estante:Estante = new Estante()
  empleado:Empleado = JSON.parse(this.cookie.get('Empleado'))




  public AgregarAEstante(){
    this.estante.sucursal = this.empleado.sucursal
    this.servicio.AgregaraEstante(this.estante).subscribe(data =>{
      console.log(data);
      if(data == "OK"){
        alert('Producto agregado a estantes correctamente')
      }else if(data == "CONFLICT"){
        alert('Limite de existencias')
      }else{
        alert('El producto no existe')
      }
    })
  }
  


}
