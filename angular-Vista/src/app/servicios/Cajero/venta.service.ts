import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/Clases/Cliente';
import { Descripcion } from 'src/app/Clases/Descripcion';
import { Empleado } from 'src/app/Clases/Empleado';
import { Producto } from 'src/app/Clases/Producto';
import { Tarjeta } from 'src/app/Clases/Tarjeta';
import { Venta } from 'src/app/Clases/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  
  constructor(private http:HttpClient) { }
  path2 = 'http://localhost:8080/Cajero/Producto';
  pathv = 'http://localhost:8080/Cajero/Venta';
  pathd = 'http://localhost:8080/Cajero/VentaDescripcion';
  pathc = 'http://localhost:8080/Cajero/Cliente';
  pathtarjeta = 'http://localhost:8080/Cajero/Tarjeta';
  
  public AgregarDetalle(codigo:String,Cantidad:number,Detalle:DProducto[],obj: {valor:number},Lista:Producto[]){
    let tmp:DProducto = new DProducto(codigo,Cantidad);
    let tmp2:Producto|undefined = Lista.find(item => item.id == codigo);

    if(tmp2 != null){
      tmp.Total = Cantidad * tmp2.precio;
      tmp.Nombre = tmp2.nombre;
      tmp.PrecioU = tmp2.precio;
      Detalle.push(tmp);
      this.ActualizarTotal(Detalle,obj)
    }
  }

  public ActualizarTotal(Detalle:DProducto[],obj: {valor:number}):number{
    let Total:number = 0;
    for (let index = 0; index < Detalle.length; index++) {
      let tmp:DProducto = Detalle[index];
      Total+= tmp.Total;
    }
    obj.valor = Total;
    return Total;
  }
  
  public getProductos(Sucursal:String){
    return this.http.post<Producto[]>(this.path2,Sucursal)
  }

  public guardarDescripcion(detalle:Descripcion){
    this.http.post(this.pathd,detalle).subscribe(data=>{
      console.log(data);
      
    });
  }

  public guardarVenta(venta:Venta){
    this.http.post(this.pathv,venta).subscribe(data =>{
      console.log(data);
    })
  }

  public Actualizar(cliente:Cliente){
    this.http.put(this.pathc,cliente).subscribe(data =>{})
  }

  public ActualizarTarjeta(tarjeta:Tarjeta){
    this.http.put(this.pathtarjeta,tarjeta).subscribe(data =>{})
  }

  public getCliente(nit:String){
    return this.http.post<Cliente>(this.pathc,nit)
  }

  public getTarjeta(nit:String){
    return this.http.post<Tarjeta>(this.pathtarjeta,nit);
  }


}





export class DProducto{
  codigo:String;
  Nombre:String;
  PrecioU:number;
  Cantidad:number;
  Total:number;
  constructor(codigo:String,cantida:number){
    this.codigo = codigo;
    this.Cantidad = cantida;
}


}
