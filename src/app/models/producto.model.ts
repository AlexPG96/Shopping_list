export class Producto{

    nombre: string;
    cantidad: number;
    departamento: string;
    comprado: boolean;

    constructor(pNombre: string = '', pCantidad: number = 1, pDepartamento: string = ''){
        this.nombre = pNombre;
        this.cantidad = pCantidad;
        this.departamento = pDepartamento;
        this.comprado = false;
    }
}