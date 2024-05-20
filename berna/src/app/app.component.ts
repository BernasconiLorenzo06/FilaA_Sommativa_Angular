import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { drivingList } from './driving.model';
import { Observable } from 'rxjs';

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
  }
  //visualizza i dettagli nella console
  noleggia(mezzo: drivingList): boolean {
    console.log(mezzo.tipo)
    console.log(mezzo.descrizione)
    console.log(mezzo.tariffa)
    console.log(mezzo.valutazionemedia)
    this.selezionato = true; //visualizza componente
    this.mezzoSelezionato = mezzo; //seleziona il mezzo
    return false
  }
}

