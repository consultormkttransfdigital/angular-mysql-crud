import { Component, OnInit } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import { CajaAction } from '../../main-nav/main-nav.actions'

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('Entrando a Caja');
    const accion = new CajaAction('Caja'); 
    this.store.dispatch(accion); 
  }

}
