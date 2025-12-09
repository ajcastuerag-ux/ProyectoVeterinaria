import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mascota } from '../../models/mascotas.models/mascotas.models';
import { MascotaService } from '../../services/mascotas-services/mascotas-services';

@Component({
  selector: 'app-listado-mascotas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-mascotas.html',
  styleUrl: './listado-mascotas.scss',
})
export class ListadoMascotas implements OnInit{

  // Signals
  mascotas = signal<Mascota[]>([]);
  cargando = signal<boolean>(true);

  constructor(private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.loadMascotas();
  }

  private loadMascotas() {
    this.cargando.set(true);

    this.mascotaService.getAllMascotas().subscribe({
      next: (data) => {
        this.mascotas.set(data);
        this.cargando.set(false);
        console.log(this.mascotas());
      },
      error: (err) => {
        console.log("Error al cargar los datos.", err);
        this.mascotas.set([]);
        this.cargando.set(false);
      }
    });
  }
}
