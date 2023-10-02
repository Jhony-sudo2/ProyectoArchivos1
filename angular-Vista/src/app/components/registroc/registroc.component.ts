import { HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleado } from 'src/app/Clases/Empleado';
import { EmpleadoService } from 'src/app/servicios/Administrador/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registroc',
  templateUrl: './registroc.component.html',
  styleUrls: ['./registroc.component.css']
})
export class RegistrocComponent {

  empleado:Empleado = new Empleado();

  constructor(private servicio:EmpleadoService,private router:Router){

  }

  public GuardarEmpleado(form:NgForm){
    let sucursal:String = form.value.sucursal;
    console.log('sucursal: ' + sucursal);
    if(sucursal == 'Norte') this.empleado.sucursal = "3";
    else if(sucursal == 'Sur') this.empleado.sucursal = "2";
    else this.empleado.sucursal = "1";
    console.log(this.empleado);
    this.servicio.GuardarEmpleado(this.empleado).subscribe(data=>{
      if(data == 'OK'){
        alert('Empleado creado correctamente')
        this.router.navigate(['/admin/usuario']);

      }else if(data == 'BAD_GATEWAY'){
        alert('El empleado ya existe')
      }

    });

  }

  public Validar(){
    
  }
}

