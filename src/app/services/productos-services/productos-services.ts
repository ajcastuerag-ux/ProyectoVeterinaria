import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../models/productos.models/productos.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {


  //En este servicio agregaremos el método para consultar los datos de confirmacion
  private apiURL = 'http://localhost:3000'; //URL del servidor de la API

  constructor(private http: HttpClient){}

  // Obtener todos los servicios
  getAllProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiURL}/getAllProductos`);
  }

  // Obtener un servicio por ID
  getProductoById(id: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiURL}/getProductoById/${id}`);
  }

  //Guardar servicio
  saveProducto(data: Producto): Observable<any> {
    return this.http.post(`${this.apiURL}/saveProducto`, data);
  }
}
