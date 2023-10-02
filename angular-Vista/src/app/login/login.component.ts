import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServicioService } from './login-servicio.service';
import { Router } from '@angular/router';
import { Usuario } from '../Clases/Usuario';
import { CookieService } from 'ngx-cookie-service';
import { Empleado } from '../Clases/Empleado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private LoginService:LoginServicioService,private router:Router,private cookie:CookieService){}
  usuario:Usuario = new Usuario()
  empleado:Empleado = new Empleado()


  ngOnInit(): void {
  }

  public Login(form:NgForm){
    let User:String = form.value.usuario;
    let Contrasena:String = form.value.password;
    this.LoginService.IniciarSesion(User,Contrasena).subscribe(todo =>{
      if(todo == null){
        {{alert('Credenciales incorrectas')}}
      }else{
        this.usuario = todo;
        this.cookie.set('Usuario',JSON.stringify(this.usuario));
        this.getEmpleado();
        switch(this.usuario.tipo){
          case 1:
            this.router.navigate(['/admin'])
            break;
          case 2:
          this.router.navigate(['/inventario'])
            break;
          case 3:
          this.router.navigate(['/bodega'])
            break;
          case 4:
            this.router.navigate(['/caja'])
            break;
        }
        
      }
      
    })
  }

  public getEmpleado(){
    this.LoginService.obtenerEmpleado(this.usuario.empleado).subscribe(data => {
      this.empleado = data;
      this.cookie.set('Empleado',JSON.stringify(this.empleado))
    })
  }

}
