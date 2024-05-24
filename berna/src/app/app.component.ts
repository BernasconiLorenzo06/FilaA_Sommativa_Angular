import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { drivingList } from './driving.model';
import { Observable } from 'rxjs';
import { rentModel } from './rent.model'; // importo la classe

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaMezzi !: drivingList[];
  obserMezzi !: Observable<drivingList[]>;
  selezionato: boolean = false; //serve per evitare il problema che lui non trovi l'auto selezionata
  mezzoSelezionato !: drivingList;
  mezziNoleggiati : rentModel[] = []; //creo il vettore
  constructor(public http: HttpClient) {} //serve a inizializzare proprieta classe

  ngOnInit(): void { //oninit serve per eseguire le istruzioni all'avvio
    this.richiesta()
  }
  //il get che prende i dati dal server che in questo caso è il link
  richiesta(): void {
    this.obserMezzi = this.http.get<drivingList[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/mezzi')
    this.obserMezzi.subscribe(this.getData)
  }
  //funzione che inizializza get data
  getData = (d:drivingList[]) => {
    this.listaMezzi = d;
    // ciclo for riempie lista mezzi di tutti i veicoli ricevuti dalla richiesta get
    for (let mezzo of this.listaMezzi) {
      this.mezziNoleggiati.push(new rentModel(mezzo))
      console.log(this.mezziNoleggiati)
  }
  }
  //visualizza i dettagli nella console
  noleggia(mezzo: drivingList): boolean {
    console.log(mezzo.tipo)
    console.log(mezzo.descrizione)
    console.log(mezzo.tariffa)
    console.log(mezzo.valutazionemedia)
    this.selezionato = true; //visualizza componente
    this.mezzoSelezionato = mezzo; //seleziona il mezzo
   //iniziallizzo mezzo noleggiato
    let mezzoNoleggiato = new rentModel(this.mezzoSelezionato)
   //aumento il numero di noleggi del veicolo noleggiato
    for (let mezzo of this.mezziNoleggiati) {
      if (mezzo.veicolo.tipo == mezzoNoleggiato.veicolo.tipo) {
        mezzo.noleggiato()
      }
    }
    return false
  }
}

