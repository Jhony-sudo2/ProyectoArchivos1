
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from 'src/app/Clases/Empleado';
import { Producto } from 'src/app/Clases/Producto';
import { BodegaService } from 'src/app/servicios/Bodega/bodega.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./../../login/login.component.css']
})
export class ProductoComponent implements OnInit{

  producto:Producto = new Producto()
  constructor(private servicio:BodegaService,private cookie:CookieService){}
  
  empleado:Empleado = JSON.parse(this.cookie.get('Empleado'))

  ngOnInit(): void {
    
  }
  

  public GuardarProducto(form:NgForm){
    this.producto.sucursal = this.empleado.sucursal
    this.servicio.IngresarProducto(this.producto).subscribe(data=>{
      if(data == "CONFLICT"){
        {{alert('El producto ya existe')}}
      }else{
        alert('Producto creado correctamente')
      }
      form.reset();
    })
  }



}
