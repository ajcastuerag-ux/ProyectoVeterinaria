import { Component, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { Veterinario } from '../../models/veterinarios.models/veterinario.models';
import { VeterinarioService } from '../../services/veterinarios-services/veterinarios-services';

@Component({
  selector: 'app-listado-veterinarios',
  standalone: true,
  imports: [],
  templateUrl: './listado-veterinarios.html',
  styleUrl: './listado-veterinarios.scss',

  encapsulation: ViewEncapsulation.None //tuve que agregar esto porque no me dejaba ver los colores de mi css
})
export class ListadoVeterinarios implements OnInit {

  // Signals
  veterinarios = signal<Veterinario[]>([]);
  cargando = signal<boolean>(true);

  constructor(private veterinarioService: VeterinarioService) {}

  ngOnInit(): void {
    this.loadVeterinarios();
  }

  private loadVeterinarios() {
    this.cargando.set(true);

    this.veterinarioService.getAllVeterinarios().subscribe({
      next: (data) => {
        this.veterinarios.set(data);
        this.cargando.set(false);
        console.log(this.veterinarios());
      },
      error: (err) => {
        console.log("Error al cargar los datos.", err);
        this.veterinarios.set([]);
        this.cargando.set(false);
      }
    });
  }
}
