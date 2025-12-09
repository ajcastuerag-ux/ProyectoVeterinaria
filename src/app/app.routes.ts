import { Routes } from '@angular/router';
import { RegistroServicios } from './pages/registro-servicios/registro-servicios';
import { RegistroVeterinarios } from './pages/registro-veterinarios/registro-veterinarios';
import { VistaPrincipal } from './pages/vista-principal/vista-principal';
import { ListadoVeterinarios } from './pages/listado-veterinarios/listado-veterinarios';
import { ListadoServicios } from './pages/listado-servicios/listado-servicios';
import { RegistroMascotas } from './pages/registro-mascotas/registro-mascotas';
import { ListadoMascotas } from './pages/listado-mascotas/listado-mascotas';
import { RegistroProductos } from './pages/registro-productos/registro-productos';
import { ListadoProductos } from './pages/listado-productos/listado-productos';

export const routes: Routes = [
//Objetos que representaran las rutas
//diferentes path para diferentes componentes
//path-->ruta
  {path:"", component: VistaPrincipal},
  {path:"registro-veterinarios", component: RegistroVeterinarios},
  {path:"listado-veterinarios", component: ListadoVeterinarios},
  {path:"registro-servicios", component: RegistroServicios},
  {path:"listado-servicios", component: ListadoServicios},
  {path:"registro-mascotas", component: RegistroMascotas},
  {path:"listado-mascotas", component: ListadoMascotas},
  {path:"registro-productos", component: RegistroProductos},
  {path:"listado-productos", component: ListadoProductos }
];

//si aqui deben ir mis componenetes, tambien tengo que poner navbar y footer
