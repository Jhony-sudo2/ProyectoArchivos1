import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarjeta } from 'src/app/Clases/Tarjeta';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  constructor(private http:HttpClient) { }
  path = 'http://localhost:8080/admin/tarjeta'


  public getClientes(clientes:String[]){
    return this.http.get<String[]>(this.path);
  }

  public AsignarTarjeta(tarjeta:Tarjeta){
    return this.http.post(this.path,tarjeta)
  }

}