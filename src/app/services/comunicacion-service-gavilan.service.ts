import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicacionServiceGavilanService {

  mensaje : string;
  private enviarMensajeSubject = new Subject<string>();
  EnviarMensajeObservableGavilan = this.enviarMensajeSubject.asObservable();

  constructor() { console.log("Constructor Ejecutándose!")}

  enviarMensaje(mensaje: string){
    console.log("enviarMensaje Ejecutándose!");
    this.mensaje = mensaje;
    this.enviarMensajeSubject.next(mensaje);
  }
}
