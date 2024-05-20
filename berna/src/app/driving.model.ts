export class drivingList {
    tipo: string;
    descrizione: string;
    tariffa: string;
    valutazionemedia: number;

    constructor(tipo: string, descrizione:string, tariffa:string, valutazionemedia:number) {
        this.tipo = tipo
        this.descrizione = descrizione
        this.tariffa = tariffa
        this.valutazionemedia = valutazionemedia
    }
}