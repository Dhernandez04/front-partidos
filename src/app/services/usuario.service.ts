import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';

import { environment } from '../../environments/environment.prod';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  
  get token(): string {
    return localStorage.getItem("token") || "";
  }
  get headers(){
    return { headers: { 'x-token': this.token } };
  }

  crearUsuario(data:Usuario) {
    return this.http.post(`${base_url}/api/auth/registrar`,data,this.headers);
  }

  traerPartido(){
    return this.http.get<Usuario[]>(`${base_url}/api/partidos`, this.headers);
  }
  /*
  actualiarAcido(id,data){
       return this.http.put(`${base_url}/api/partidos/${id}`,data,this.headers);
  }*/
}