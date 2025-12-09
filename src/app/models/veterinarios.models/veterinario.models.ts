export interface Veterinario {
  Id_vet: number;
  nombre_completo: string;
  especialidad: string;
  telefono: string;
  correo: string;
  horario_disponible: string;
  anos_experiencia: number;
  cedula_profesional: string;
  observaciones: string | null;
  imagen: string;
}
