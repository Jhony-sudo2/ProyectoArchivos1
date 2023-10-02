import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from 'src/app/Clases/Empleado';
import { Usuario } from 'src/app/Clases/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  PATH = 'http://localhost:8080/admin/usuarios'

  public getUsuarios(){
    return this.http.get<Empleado[]>(this.PATH);
  }

  public GuardarUsuario(user:Usuario){
    return this.http.post(this.PATH,user);
  }

}
