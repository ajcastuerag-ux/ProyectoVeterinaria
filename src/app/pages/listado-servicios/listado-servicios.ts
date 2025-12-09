import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { Servicio } from '../../models/servicios.models/servicios.models';
import { ServicioService } from '../../services/servicios-services/servicios-services';

@Component({
  selector: 'app-listado-servicios',
  standalone: true,
  imports: [],
  templateUrl: './listado-servicios.html',
  styleUrl: './listado-servicios.scss',

  encapsulation: ViewEncapsulation.None

})
export class ListadoServicios implements OnInit {

  // Signals
  servicios = signal<Servicio[]>([]);
  cargando = signal<boolean>(true);

  constructor(private servicioService: ServicioService) { }

  ngOnInit(): void {
    this.loadServicios();
  }

  private loadServicios() {
    this.cargando.set(true);

    this.servicioService.getAllServicios().subscribe({
      next: (data) => {
        this.servicios.set(data);
        this.cargando.set(false);
        console.log(this.servicios());
      },
      error: (err) => {
        console.log("Error al cargar los datos.", err);
        this.servicios.set([]);
        this.cargando.set(false);
      }
    });
  }

  getIcono(categoria: string): string {
    switch (categoria) {
      case 'Consulta': return '🩺';
      case 'Urgenicas': return '🩺';
      case 'Cirugía': return '🩺';
      case 'Baño': return '🛁';
      case 'Estética': return '🛁';
      default: return '🐾';
    }
  }
}
