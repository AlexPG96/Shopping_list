import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() productos: Producto[];

  constructor() { }

  ngOnInit(): void {
  }

  onProductoComprado($event) {
    localStorage.setItem('productos', JSON.stringify(this.productos))
  }
}
