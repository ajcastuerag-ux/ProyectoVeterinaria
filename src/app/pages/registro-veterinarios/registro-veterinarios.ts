import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-veterinarios',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './registro-veterinarios.html',
  styleUrl: './registro-veterinarios.scss'
})
export class RegistroVeterinarios {
  model = {
    nombre_completo: '',
    especialidad: '',
    telefono:'',
    correo: '',
    horario_disponible: '',
    anos_experiencia:1,
    cedula_profesional: '',
    observaciones: '',
    imagen: ''
  };

  private apiUrl = 'http://localhost:3000/Veterinario';

  constructor(private http: HttpClient) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.http.post(this.apiUrl, this.model).subscribe({
      next: () => {
        console.log("Veterinario registrado exitosamente!");
        alert("Veterinario registrado exitosamente");
        form.resetForm();
        this.model.imagen = '';
      },

      error: (err) => {
        console.log("Error al registrar veterinario", err);
        alert("Transacción fallida");
      }
    });
  }
}
