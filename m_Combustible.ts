import { Motor } from "./motor";

enum tipoCombustible {
    gas, gasoil, nafta
}
class Combustible extends Motor{
    private cilindro: number;
    private tipoCombustible: tipoCombustible;
    constructor(potenciaHp: number, fabricante: string, eficiencia, cilindro :number, tipoCombustible: tipoCombustible, id: string, descripcion:string, fechaFabr: Date, fechaInst: Date){
        super(id, descripcion, fechaFabr, fechaInst, potenciaHp, eficiencia, fabricante);
        this.cilindro = cilindro;
        this.tipoCombustible = tipoCombustible;
    }
}