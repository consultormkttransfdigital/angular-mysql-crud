import { Component, OnInit } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import { NotificacionesAction } from '../../main-nav/main-nav.actions'

@Component({
  selector: 'notificaciones',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('Entrando a Notificaciones');
    const accion = new NotificacionesAction('Notificaciones'); 
    this.store.dispatch(accion); 
  }

}
