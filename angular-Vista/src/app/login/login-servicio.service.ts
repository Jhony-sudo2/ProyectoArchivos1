import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from '../Clases/Empleado';

@Injectable({
  providedIn: 'root'
})
export class LoginServicioService {

  constructor(private http:HttpClient) { }
  path = 'http://localhost:8080/user';
  path2 = 'http://localhost:8080/user/empleado';
  
  public obtenerEmpleado(empleado:number){
    return this.http.post<Empleado>(this.path2,empleado)
  }

  public IniciarSesion(user:String,Contrasena:String){
    let user2:Usuario = new Usuario(user,Contrasena);
    return this.http.post<Usuario>(this.path,user2);
  }

}
class Usuario{
  nombre:String;
  contrasena:String;
  tipo:number;
  empleado:number;
  caja:number;

  constructor(Nombre:String,Contrasena:String){
      this.contrasena = Contrasena;
      this.nombre = Nombre;
  }

}
