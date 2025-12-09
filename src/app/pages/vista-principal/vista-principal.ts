import { Component } from '@angular/core';

@Component({
  selector: 'app-vista-principal',
  standalone: true,
  imports: [],
  templateUrl: './vista-principal.html',
  styleUrl: './vista-principal.scss',
})
export class VistaPrincipal {

    scrollToMission() {
    const element = document.getElementById('nuestra-mision');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}

