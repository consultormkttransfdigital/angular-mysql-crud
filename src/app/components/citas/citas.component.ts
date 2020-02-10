import { Component, OnInit, setTestabilityGetter } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import { CitasAction } from '../../main-nav/main-nav.actions'

@Component({
  selector: 'citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('Entrando a Citas');
    const accion = new CitasAction('Citas'); 
    this.store.dispatch(accion);     
  }

}
