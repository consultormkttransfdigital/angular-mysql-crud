import { Component, OnInit } from '@angular/core';
import { ComunicacionServiceGavilanService } from '../../services/comunicacion-service-gavilan.service';

@Component({
  selector: 'nieto-a-lej',
  templateUrl: './nieto-a-lej.component.html',
  styleUrls: ['./nieto-a-lej.component.css']
})
export class NietoALejComponent implements OnInit {

  mensaje: string;

  constructor(private ComunicacionServiceGavilan: ComunicacionServiceGavilanService ) { }

  ngOnInit(): void {
    this.ComunicacionServiceGavilan.EnviarMensajeObservableGavilan.subscribe(response=>{
      this.mensaje = response;
    })
  }

  cambioTexto(mensaje: string){
    this.ComunicacionServiceGavilan.enviarMensaje(mensaje);
  }  

}
