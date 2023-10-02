export class Tarjeta{
    id:number;
    cliente:String;
    tipo:number;
    puntos:number;
    

    public ActualizarPuntos(gastado:number){
        let nuevo:number = Math.floor(gastado/200);
        switch(this.tipo){
            case 1:
                nuevo = nuevo * 5;
                break;
            case 2:
                nuevo = nuevo *10;
                break;
            case 3:
                nuevo = nuevo *15;
                break;
            case 4:
                nuevo = nuevo *30;
                break;
        }
        this.puntos += nuevo;

    }

}