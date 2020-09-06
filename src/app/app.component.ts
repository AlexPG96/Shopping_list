import { Component } from '@angular/core';
import { Producto } from './models/producto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  productosSeleccionados: Producto[];

  constructor(){
    if(localStorage.getItem('productos')){
      const arrProductos = JSON.parse(localStorage.getItem('productos')); //JSON.parse para transformar string a objetos.
      //console.log(arrProductos)
      this.productosSeleccionados = arrProductos
    }else {
      this.productosSeleccionados = [];
    }
  }

  onProductoEnviado($event){

    this.productosSeleccionados.push($event);
    console.log(this.productosSeleccionados)
    // localStorage.setItem('prueba', 'Esto es una prueba')

    const productosSeleccionadosStr = JSON.stringify(this.productosSeleccionados); //stringify para transformar objetos a strings.
    localStorage.setItem('productos', productosSeleccionadosStr);
    
  }



}
