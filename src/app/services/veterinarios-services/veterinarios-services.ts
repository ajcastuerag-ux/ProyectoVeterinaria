import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veterinario } from '../../models/veterinarios.models/veterinario.models';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {


  //En este servicio agregaremos el método para consultar los datos de confirmacion
  private apiURL = 'http://localhost:3000'; //URL del servidor de la API

  constructor(private http: HttpClient){}

  // Obtener todos los veterinarios
  getAllVeterinarios(): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(`${this.apiURL}/getAllVeterinarios`);
  }

  // Obtener un veterinario por ID
  getVeterinarioById(id: number): Observable<Veterinario[]> {
    return this.http.get<Veterinario[]>(`${this.apiURL}/getVeterinarioById/${id}`);
  }

  //Guardar veterinario
  Veterinario(data: Veterinario): Observable<any> {
    return this.http.post(`${this.apiURL}/Veterinario`, data);
  }
}
