export default class Equipo{
    private id: string;
    private descripcion: string;
    private fechaFabricacion: Date;
    private fechaInstalacion: Date;

    constructor(id: string, descripcion: string, fechFabr: Date, fechInst: Date) {
        this.id = id;
        this.descripcion = descripcion;
        this.fechaFabricacion = fechFabr;
        this.fechaInstalacion = fechInst;
    }
    agregrarEquipo(id: Equipo, array: Equipo[]){
        if(array.push(id)) {
            console.log('se añadio', id, 'al equipo');
            return Equipo
        } else {
            console.log('no se ha podido añadir, intente nuevamente');
        }
    }
    leerEquipo(array: Equipo[]){
        console.log(Equipo);
    }
    eliminarEquipo(id: Equipo, array: Equipo[]): any{
        const encontrar = array.findIndex(id => id == id);
        if(encontrar >= 0){
            array.slice(encontrar, 1)
                console.log(id ,'ha sido eliminado del equipo');
                console.log(array);
            }
    }
    editarEquipo(id: Equipo, array: Equipo[], dato: string){
        let consulta = array.find(id => id === id);
            if(consulta){
                consulta.id = dato;
                console.log('el equipo', id, 'se ha modificado por: ', dato);
            }
            else {
                console.log('no se ha podido modificar');
            }
    }
}