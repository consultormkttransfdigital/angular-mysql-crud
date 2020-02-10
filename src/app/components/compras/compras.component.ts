import { Component, OnInit } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import { ComprasAction } from '../../main-nav/main-nav.actions'

@Component({
  selector: 'compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('Entrando a Compras');
    const accion = new ComprasAction('Compras'); 
    this.store.dispatch(accion);        
  }

}
