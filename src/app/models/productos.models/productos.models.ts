export interface Producto {
  Id_producto: number;
  nombre: string;
  descripcion: string;
  precio: number;
  stock: number;
  categoria: string;
  marca: string;
  estado: 'activo' | 'inactivo';
}
