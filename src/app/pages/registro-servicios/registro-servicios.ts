import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Veterinario } from '../../models/veterinarios.models/veterinario.models';
import { Mascota } from '../../models/mascotas.models/mascotas.models';

@Component({
  selector: 'app-registro-servicios',
  standalone: true,
  imports: [CommonModule,FormsModule, HttpClientModule],
  templateUrl: './registro-servicios.html',
  styleUrl: './registro-servicios.scss',

})
export class RegistroServicios implements OnInit {

  mascotas: Mascota[] = [];
  veterinarios: Veterinario[] = [];

  nombreMascota: string = "";
  mascotasFiltradas: Mascota[] = [];
  mostrarLista: boolean = false;



  model = {
    nombre_servicio: '',
    descripcion: '',
    precio: 0,
    fecha: '',
    duracion: '',
    categoria: '',
    Id_mascota: 0,
    Id_vet: 0,
    estado: ''
  };

  private apiUrl = 'http://localhost:3000/saveServicio';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadMascotas();
    this.loadVeterinarios();
  }

  loadMascotas() {
    this.http.get('http://localhost:3000/getAllMascotas')
      .subscribe((data: any) => {
        this.mascotas = data;
        console.log('Mascotas cargadas:', this.mascotas);
      });
  }

  loadVeterinarios() {
    this.http.get('http://localhost:3000/getAllVeterinarios')
      .subscribe((data: any) => {
        this.veterinarios = data;
      });
  }

    // ---- Lógica del AUTOCOMPLETE ----
  filtrarMascotas() {
    const texto = this.nombreMascota.toLowerCase();
    this.mascotasFiltradas = this.mascotas.filter(m =>
      m.nombre.toLowerCase().includes(texto)
    );
    this.mostrarLista = true;
  }

  seleccionarMascota(m: Mascota) {
    this.nombreMascota = m.nombre;
    this.model.Id_mascota = m.Id_mascota;
    this.mostrarLista = false;
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.http.post(this.apiUrl, this.model).subscribe({
      next: () => {
        alert("Servicio registrado correctamente");
        form.resetForm();
      },
      error: () => {
        alert("Transacción fallida");
      }
    });
  }
}
