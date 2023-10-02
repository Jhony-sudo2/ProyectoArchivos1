import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from 'src/app/Clases/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http:HttpClient) { }

  path = 'http://localhost:8080/Cajero';

  public IngresarCliente(cliente:Cliente){
    this.http.post(this.path,cliente).subscribe(data =>{
      console.log(data);
      if(data == 'OK'){
        alert('Empleado Creado Correctamente')
      }else{
        alert('El empleado ya existe')
      }

    });
  }

}
