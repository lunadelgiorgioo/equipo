import Equipo from "./claseEquipo";

export class Bomba extends Equipo {
    protected name: string;
    private caudalEntrada: number;
    private caudalSalida: number;
    private fabricante: string;

    constructor(name: string, id: string, descripcion: string, fechaFabr: Date, fechaInst: Date, caudalEntrada: number, caudalSalida: number, fabricante: string) {
        super(id, descripcion, fechaFabr, fechaInst);
        this.name = name;
        this.caudalEntrada = caudalEntrada;
        this.caudalSalida = caudalSalida;
        this.fabricante = fabricante;
    }
    agregarBomba(name: Bomba, array: Bomba[]){
        if(array.push(name)){
            console.log(`${name} se añadio correctamente`);
        }
        else {
            console.log(`no pudo agregar la bomba correctamente`);
        }
    }
    leerBomba(array: Bomba[]){
        console.log(array);
    }
    eliminarBomba(name: string, array: Bomba[]): any {
        let buscar = array.findIndex(name => name == name) 
        if(buscar => 0) {
            array.splice(buscar, 1)
            console.log('Bomba eliminada', name)
        }
    }
    modificarBomba(name: string, array: Bomba[], date: string){
        const buscar = array.find(name => name === name);
        if(buscar){
            buscar.name = date;
            console.log(`se pudo modificar ${name}, por ${date}`);
        }
    }
}
