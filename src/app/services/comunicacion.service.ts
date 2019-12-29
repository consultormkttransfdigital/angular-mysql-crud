import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Global } from '../models/globals2.model';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  globals: Global;

  private enviarMensajeSubject = new Subject<Global>();
  enviarMensajeObservable = this.enviarMensajeSubject.asObservable();

  constructor() { 
    console.log("Contructor of ComunicacionService!");
    this.globals = new Global();
  }

  enviarMensaje(mensaje: Global){
    this.globals = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
