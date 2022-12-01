import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  baseUrl = 'http://localhost/webservicepwe2/controller/';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }

  
  Get(Modelo: string, Accion: string) {
    return this.http.get(`${this.baseUrl}${Modelo}.php?opcion=${Accion}`, this.httpOptions);
  }

  Post(Modelo: string, Accion: string, Datos: any) {
    return this.http.post(`${this.baseUrl}${Modelo}.php?opcion=${Accion}`, Datos, this.httpOptions);
  }

}
