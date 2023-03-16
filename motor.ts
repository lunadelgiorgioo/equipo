import Equipo from "./claseEquipo";
enum Eficiencia {
    A, B, C, D, E,
}

export class Motor extends Equipo{
    private potenciaHp: number;
    private eficiencia: Eficiencia;
    private fabricante: string;
    constructor(id: string, descripcion: string, fechaFabr: Date, fechaInst: Date, potenciaHp: number, eficiencia: Eficiencia, fabricante: string){
        super(id, descripcion, fechaFabr, fechaInst)
        this.potenciaHp = potenciaHp;
        this.eficiencia = eficiencia;
        this.fabricante = fabricante;
    }
}