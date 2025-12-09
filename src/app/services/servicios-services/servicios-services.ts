import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../../models/servicios.models/servicios.models';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {


  //En este servicio agregaremos el método para consultar los datos de confirmacion
  private apiURL = 'http://localhost:3000'; //URL del servidor de la API

  constructor(private http: HttpClient){}

  // Obtener todos los servicios
  getAllServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.apiURL}/getAllServicios`);
  }

  // Obtener un servicio por ID
  getServicioById(id: number): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.apiURL}/getServicioById/${id}`);
  }

  //Guardar servicio
  saveServicio(data: Servicio): Observable<any> {
    return this.http.post(`${this.apiURL}/saveServicio`, data);
  }
}
