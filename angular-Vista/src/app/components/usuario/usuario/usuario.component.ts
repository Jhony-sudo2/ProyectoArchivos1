import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Clases/Empleado';
import { Usuario } from 'src/app/Clases/Usuario';
import { UsuarioService } from 'src/app/servicios/Administrador/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['../../../login/login.component.css']
})
export class UsuarioComponent implements OnInit{
  
  constructor(private servicio:UsuarioService){

  }

  user:Usuario;
  Lista:Empleado[]

  ngOnInit(): void {
    this.user = new Usuario();
    this.servicio.getUsuarios().subscribe(data =>{
      this.Lista = data;
    })
  }

  public GuardarUsuario(){
    this.servicio.GuardarUsuario(this.user).subscribe(data=>{
      if(data == "OK"){
        alert('Usuario creado correctamente');
        this.ngOnInit();
        
      }else{
        alert('El usuario ya existe');
      }
    })
  }


}
