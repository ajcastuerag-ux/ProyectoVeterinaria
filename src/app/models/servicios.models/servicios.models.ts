export interface Servicio {
  Id_servicio: number;
  nombre_servicio: string;
  descripcion: string;
  precio: number;
  fecha: string;
  duracion: string;
  categoria: string;
  Id_mascota: number;  // FK
  Id_vet: number;     // FK
  estado: string;
}
