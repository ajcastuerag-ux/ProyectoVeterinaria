import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-mascotas',
  standalone: true,
  imports: [FormsModule, HttpClientModule, CommonModule],
  templateUrl: './registro-mascotas.html',
  styleUrl: './registro-mascotas.scss',

})
export class RegistroMascotas {
  model = {
    nombre: '',
    especie: '',
    raza: '',
    sexo: '',
    fecha_nacimiento: '',
    color: '',
    nombre_propietario: ''
  };

  private apiUrl = 'http://localhost:3000/saveMascota';

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });

      Object.keys(form.controls).forEach(name => {
        const element = document.getElementsByName(name)[0];
        if (element && form.controls[name].invalid) {
          element.classList.add('shake');

          setTimeout(() => element.classList.remove('shake'), 300);
        }
      });

      return;
    }

    this.http.post(this.apiUrl, this.model).subscribe({
      next: (res) => {
        console.log("Mascota registrada exitosamente!");
        alert("Mascota registrada exitosamente");
        form.resetForm();
      },

      error: (err) => {
        console.log("Error al registrar mascota", err);
        alert("Transacción fallida");
      }
    });
  }
}

