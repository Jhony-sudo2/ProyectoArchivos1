import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Estante } from 'src/app/Clases/Estante';
import { Producto } from 'src/app/Clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http:HttpClient) { }
  path = 'http://localhost:8080/invetario'
  path2 = 'http://localhost:8080/invetario/info'


  public getProducto(codigo:String,sucursal:String){
    let producto:Producto = new Producto()
    producto.id = codigo;
    producto.sucursal = sucursal
    return this.http.post<Producto>(this.path2,producto);
  }

  public AgregaraEstante(estante:Estante){
      console.log('agregando a estante');
      return this.http.post(this.path,estante);
      
  }

}

