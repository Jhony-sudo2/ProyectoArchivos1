import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/Clases/Empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private htpp:HttpClient) { }
  PATH = 'http://localhost:8080/admin'

  public GuardarEmpleado(empleado:Empleado){
    return this.htpp.post(this.PATH,empleado);
    
  }

}
