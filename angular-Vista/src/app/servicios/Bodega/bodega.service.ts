import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invetario } from 'src/app/Clases/Inventario';
import { Producto } from 'src/app/Clases/Producto';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  constructor(private http:HttpClient) { }
  path = 'http://localhost:8080/bodega';
  path2 = 'http://localhost:8080/bodega/add';

  public IngresarProducto(producto:Producto){
    return this.http.post(this.path,producto);
  }

  public AgregarAInventario(invetario:Invetario){
    this.http.post(this.path2,invetario).subscribe(data =>{
      if(data == "OK") alert('Productos agregado a bodega correctamente')
      else{
        alert('El producto no existe en esta sucursal')
      }
    })
  }

}
