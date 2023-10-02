import { Component, OnInit } from '@angular/core';
import { Tarjeta } from 'src/app/Clases/Tarjeta';
import { TarjetaService } from 'src/app/servicios/Administrador/tarjeta.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit{
  
  constructor(private servicio:TarjetaService){
  }
  Clientes:String[]
  tarjeta:Tarjeta


  ngOnInit(): void {
    this.tarjeta = new Tarjeta();
    this.servicio.getClientes(this.Clientes).subscribe(data=>{
      this.Clientes =data;
    })
  }

  public getClientes(clientes:String[]){
    this.servicio.getClientes(clientes);
  }

  public AsignarTarjeta(){
    this.tarjeta.puntos = 0;
    console.log(this.tarjeta);

    this.servicio.AsignarTarjeta(this.tarjeta).subscribe(data=>{
      if(data == "OK"){
        alert('Tarjeta asignada correctamentes')
        this.ngOnInit();
      }
    })
  }
}
