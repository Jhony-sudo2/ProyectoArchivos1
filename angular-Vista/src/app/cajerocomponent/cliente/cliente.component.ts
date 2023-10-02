import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Cliente } from 'src/app/Clases/Cliente';
import { ClienteService } from 'src/app/servicios/Cajero/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

  constructor(private servicio:ClienteService){}
  cliente:Cliente = new Cliente();


  public IngresarCliente(Form:NgForm){
    console.log(this.cliente);
    this.servicio.IngresarCliente(this.cliente);  
    
  }

}
