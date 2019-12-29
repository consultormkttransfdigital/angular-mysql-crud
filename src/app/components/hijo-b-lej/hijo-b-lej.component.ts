import { Component, OnInit } from '@angular/core';
import { ComunicacionServiceGavilanService } from '../../services/comunicacion-service-gavilan.service';

@Component({
  selector: 'hijo-b-lej',
  templateUrl: './hijo-b-lej.component.html',
  styleUrls: ['./hijo-b-lej.component.css']
})
export class HijoBLejComponent implements OnInit {

  mensaje: string;

  constructor(private ComunicacionServiceGavilan : ComunicacionServiceGavilanService ) { }

  ngOnInit() {
  }

  recibirCambios(){
    this.mensaje = this.ComunicacionServiceGavilan.mensaje;
  }

}
