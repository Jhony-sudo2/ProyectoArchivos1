import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reporte1 } from 'src/app/Clases/Reporte1';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {

  constructor(private http:HttpClient) {}

  path = "http://localhost:8080/admin/reporte"


  
  public getReporte(){
    return this.http.get<Reporte1[]>(this.path);
  }

}
