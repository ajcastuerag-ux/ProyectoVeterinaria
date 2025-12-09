import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mascota } from '../../models/mascotas.models/mascotas.models';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient){}

  // Obtener todos los servicios
  getAllMascotas(): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiURL}/getAllMascotas`);
  }

  // Obtener un servicio por ID
  getMascotaById(id: number): Observable<Mascota[]> {
    return this.http.get<Mascota[]>(`${this.apiURL}/getMascotaById/${id}`);
  }

  //Guardar servicio
  saveMascota(data: Mascota): Observable<any> {
    return this.http.post(`${this.apiURL}/saveMascota`, data);
  }
}
