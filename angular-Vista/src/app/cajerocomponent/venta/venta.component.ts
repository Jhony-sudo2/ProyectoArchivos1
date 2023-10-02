import { Component,OnDestroy,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Cliente } from 'src/app/Clases/Cliente';
import { Descripcion } from 'src/app/Clases/Descripcion';
import { Empleado } from 'src/app/Clases/Empleado';
import { Producto } from 'src/app/Clases/Producto';
import { Tarjeta } from 'src/app/Clases/Tarjeta';
import { Usuario } from 'src/app/Clases/Usuario';
import { Venta } from 'src/app/Clases/Venta';
import { TarjetaService } from 'src/app/servicios/Administrador/tarjeta.service';
import { DProducto, VentaService } from 'src/app/servicios/Cajero/venta.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit{
  Detalle:DProducto[];
  cliente:Cliente;
  tarjeta:Tarjeta;
  ListaProducto:Producto[]
  Codigo:String
  factura:String
  Total = {valor:0};
  TotalDescuento = this.Total
  cantdescuento:number
  continuar:boolean = true
  usuariot:Usuario = JSON.parse(this.cookie.get('Usuario'))
  empleado:Empleado = JSON.parse(this.cookie.get('Empleado'))

  constructor(private servicio:VentaService,private cookie:CookieService){}
  ngOnInit(): void {
    this.factura = this.generarCodigoFactura()
    this.Detalle = [];
    this.cliente = new Cliente();
    this.servicio.getProductos(this.empleado.sucursal).subscribe(data=>{
      this.ListaProducto = data;
    })
  }


  public Agregar(form:NgForm){
    let Cantidad:number = form.value.cantidad;
    
    if(this.Codigo.length != 0 && Cantidad > 0){
      this.servicio.AgregarDetalle(this.Codigo,Cantidad,this.Detalle,this.Total,this.ListaProducto);
    }
    else{
      {{alert('Ingrese todos los campos')}}
    }
  }

  public eliminarFila(I:number){
    this.Detalle.splice(I,1);
    this.servicio.ActualizarTotal(this.Detalle,this.Total);
  }

  public Vender(){
    console.log('vendiendo');
    this.Detalle.forEach(element => {
      let tmp:Descripcion = new Descripcion(this.factura,element.codigo,element.Cantidad,element.Total);
      this.servicio.guardarDescripcion(tmp);  
    });
    let venta:Venta = new Venta(this.factura,this.cliente.nit,1,this.Total.valor,125,"3")
    this.servicio.guardarVenta(venta)
    this.cliente.gastado += this.Total.valor;
    this.servicio.Actualizar(this.cliente);
    if(this.tarjeta != undefined){
      this.ActualizarPuntos();
    }

    this.ngOnInit();
  }

  public generarCodigoFactura(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigoFactura = '';
    const longitudCodigo = 6;
  
    for (let i = 0; i < longitudCodigo; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      codigoFactura += caracteres.charAt(indice);
    }
  
    return codigoFactura;
  }


  public CargarCliente(nit:String){
    this.servicio.getCliente(nit).subscribe(data =>{
      if(data != null){
        this.cliente = data;
        this.CargarTarjeta(this.cliente.nit)
      }
      else{
        alert('el cliente no existe')
      }
    })
  }


  public ActualizarPuntos(){
    this.tarjeta.ActualizarPuntos(this.Total.valor)
    this.servicio.ActualizarTarjeta(this.tarjeta)
  }




  public CargarTarjeta(Nit:String){
    this.servicio.getTarjeta(Nit).subscribe(data =>{
      if(data != null){
        this.tarjeta = new Tarjeta()
        this.tarjeta.id = data.id;
        this.tarjeta.cliente = data.cliente;
        this.tarjeta.puntos = data.puntos
        this.tarjeta.tipo = data.tipo
      }else{
        console.log('tarjeta no encontrada');
        this.tarjeta = data;
      }
    })
  }
  

}




