import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  @Input() producto: Producto;

  @Output() productoComprado: EventEmitter<Producto>

  constructor() { 
    this.productoComprado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onClickComprar(){
    this.producto.comprado = !this.producto.comprado;
    this.productoComprado.emit(this.producto);
  }

}
