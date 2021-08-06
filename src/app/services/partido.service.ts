import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Partido } from '../models/Partido';

import { environment } from '../../environments/environment.prod';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  constructor(private http: HttpClient) { }
  
  get token(): string {
    return localStorage.getItem("token") || "";
  }
  get headers(){
    return { headers: { 'x-token': this.token } };
  }

  crearPartido(data:Partido) {
    return this.http.post(`${base_url}/api/partidos`,data,this.headers);
  }

  traerPartido(){
    return this.http.get<Partido[]>(`${base_url}/api/partidos`, this.headers);
  }
  /*
  actualiarAcido(id,data){
       return this.http.put(`${base_url}/api/partidos/${id}`,data,this.headers);
  }*/
}