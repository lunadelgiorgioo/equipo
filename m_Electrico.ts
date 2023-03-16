import { Motor } from "./motor";

export class Electrico extends Motor{
    private voltaje: string;
    private consumoKwH: number;
    private isBajoConsumo: boolean;
    constructor(voltaje: string, consumoKwH: number, isBajoConsumo: boolean, potenciaHp: number, fabricante: string, eficiencia, id: string, descripcion:string, fechaFabr: Date, fechaInst: Date){
        super(id, descripcion, fechaFabr, fechaInst, potenciaHp, eficiencia, fabricante);
        this.voltaje = voltaje;
        this.consumoKwH = consumoKwH;
        this.isBajoConsumo = isBajoConsumo;
    }
}
