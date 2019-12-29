import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { appState } from './redux_ejemplo.reducer'; 
import * as fromMensaje from './mensaje.action';

@Component({
  selector: 'redux-ejemplo', 
  templateUrl: './redux-ejemplo.component.html',
  styleUrls: ['./redux-ejemplo.component.css'] 
})
export class ReduxEjemploComponent implements OnInit {

// Se usa simbolo $ para variables que almacena observables
dato$ : Observable<any>;

  constructor(private store: Store<appState>){ 
    // Esta propiedad es la que se encuentra en app.module
    // this.dato$ = store.select('property01OfStore');
    this.dato$ = store.select('mensaje');
  }

  ngOnInit() {
  }

  spanishMensaje(){
    // this.store.dispatch({type : "SPANISH"})
    this.store.dispatch(new fromMensaje.SpanishMensaje('Los colores'))
  }

  englishMensaje(){
    // this.store.dispatch({type : "ENGLISH"})
    this.store.dispatch(new fromMensaje.EnglishMensaje('Yellow'))
  }

}
