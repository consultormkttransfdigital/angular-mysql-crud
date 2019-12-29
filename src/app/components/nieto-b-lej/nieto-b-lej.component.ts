import { Component, OnInit } from '@angular/core';
import { ComunicacionServiceGavilanService }  from '../../services/comunicacion-service-gavilan.service';

@Component({
  selector: 'nieto-b-lej',
  templateUrl: './nieto-b-lej.component.html',
  styleUrls: ['./nieto-b-lej.component.css']
})
export class NietoBLejComponent implements OnInit {

  mensaje: string;

  constructor(private ComunicacionServiceGavilan : ComunicacionServiceGavilanService ) { }

  ngOnInit() : void {
    this.ComunicacionServiceGavilan.EnviarMensajeObservableGavilan.subscribe(response =>{
      this.mensaje = response;
    })
  }

  cambioTexto(mensaje: string) {
    this.ComunicacionServiceGavilan.enviarMensaje(mensaje);
  }

}
