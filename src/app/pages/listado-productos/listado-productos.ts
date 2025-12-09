import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../models/productos.models/productos.models';
import { ProductoService } from '../../services/productos-services/productos-services';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.scss',
})
export class ListadoProductos implements OnInit {

  // Signals
  productos = signal<Producto[]>([]);
  cargando = signal<boolean>(true);

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.loadProductos();
  }

  private loadProductos() {
    this.cargando.set(true);

    this.productoService.getAllProductos().subscribe({
      next: (data) => {
        this.productos.set(data);
        this.cargando.set(false);
        console.log(this.productos());
      },
      error: (err) => {
        console.log("Error al cargar los datos.", err);
        this.productos.set([]);
        this.cargando.set(false);
      }
    });
  }

  getImagenPorCategoria(categoria: string): string {
    if (!categoria) return 'https://via.placeholder.com/200'; // default
    const cat = categoria.toLowerCase();

    if (cat.includes('alimento') || cat.includes('comida')) {
      return 'https://imparcialoaxaca.mx/wp-content/uploads/2025/06/Croquetas-1.jpg';
    }

    if (cat.includes('higiene') || cat.includes('baño')) {
      return 'https://thumbs.dreamstime.com/b/yorkshire-terrier-con-productos-para-el-cultivo-de-mascotas-higiene-del-cuidado-perro-y-una-rutina-saludable-imagen-alta-calidad-394334470.jpg';
    }

    if (cat.includes('juguete')) {
      return 'https://m.media-amazon.com/images/I/81RbJGmN16L._AC_UF894,1000_QL80_.jpg';
    }

    if (cat.includes('medicamento') || cat.includes('salud')) {
      return 'https://www.advacarepharma.com/static/1676e32dbd13ac0b2d268398516450fc/b6e7e/fabricante-de-medicamentos-veterinarios-advacare-pharma.png';
    }

    if (cat.includes('accesorio')) {
      return 'https://i5.walmartimages.com/asr/219cdd0b-bb19-4d62-abf4-b408e89e455a.a1bff39d75d95eba4c91f2624750689b.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF';
    }

    // default
    return 'https://via.placeholder.com/200';
  }
}
