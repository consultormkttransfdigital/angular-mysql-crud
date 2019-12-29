import { Component, OnInit } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import { ClientesAction } from '../../main-nav/main-nav.actions'

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() { 

    console.log('Entrando a Clientes');
    const accion = new ClientesAction('Clientes'); 
    this.store.dispatch(accion); 

  }

}
