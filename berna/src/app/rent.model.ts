//classe che come proprieta ha un numero(noleggi)
import { drivingList } from "./driving.model";

export class rentModel {
    veicolo: drivingList ;
    noleggi: number = 0;

    constructor(veicolo:drivingList ) {
        this.veicolo = veicolo
    }
    //metodo che aumenta di 1 il numero di noleggi
    noleggiato(): void{
        this.noleggi += 1
    }
}