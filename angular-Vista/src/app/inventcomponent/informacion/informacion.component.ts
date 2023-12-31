import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from 'src/app/Clases/Empleado';
import { Producto } from 'src/app/Clases/Producto';
import { InventarioService } from 'src/app/servicios/Inventario/inventario.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit{

  constructor(private servicio:InventarioService,private cookie:CookieService){}

  informacion:Producto
  existencia1:any
  existencia2:any
  codigo:String
  empleado:Empleado = JSON.parse(this.cookie.get('Empleado'))

  ngOnInit(): void {
    this.informacion = new Producto()
    console.log(this.empleado);
    
  }

  public getProducto(id:String){
    
    this.servicio.getProducto(id,this.empleado.sucursal).subscribe(data =>{
      if(data != null){
        this.informacion = data
        console.log("Codigo mandado: " + id);
        this.servicio.getInventario(id).subscribe(data =>{ this.existencia1 = data})
        this.servicio.getEstante(id).subscribe(data =>{this.existencia2 = data})
      }
      else alert('El producto no existe en la sucursal')
      
    })
  }
}
