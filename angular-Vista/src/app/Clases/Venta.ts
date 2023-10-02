export class Venta{
    factura:String;
    cliente:String;
    empleado:number;
    total:number;
    totaldescuento:number;
    sucursal:String;

    constructor(factura:String,cliente:String,empleado:number,total:number,totaldescuento:number,sucursal:String){
        this.factura = factura;
        this.empleado = empleado;
        this.total = total;
        this.totaldescuento = totaldescuento;
        this.sucursal = sucursal;
        this.cliente = cliente;
    }


}