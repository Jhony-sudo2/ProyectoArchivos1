export class Descripcion{
    id:number;
    factura:String;
    producto:String;
    cantidad:number;
    total:number;

    constructor(factura:String,producto:String,cantidad:number,total:number){
        this.factura =factura;
        this.producto = producto;
        this.cantidad =cantidad;
        this.total = total;
    }

}