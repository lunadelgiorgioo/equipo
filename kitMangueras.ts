import Equipo from "./claseEquipo";
enum Material {
    goma, poliuretano, neopremo, silicona
}
export class Mangueras extends Equipo{
    private elementos: number;
    private medidaPulgada: number;
    private roscaMaterial: Material;
    constructor(elementos: number, medidasPulgadas: number, roscaMaterial: Material, id: string, descripcion: string, fechaFabr: Date, fechaInst: Date){
        super(id, descripcion, fechaFabr, fechaInst);
        this.elementos = elementos;
        this.medidaPulgada = medidasPulgadas;
        this.roscaMaterial = roscaMaterial;
    }
}