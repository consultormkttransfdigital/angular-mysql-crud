import { Component, OnInit } from '@angular/core';
import { ComunicacionServiceGavilanService} from '../../services/comunicacion-service-gavilan.service';

@Component({
  selector: 'padre-lej',
  templateUrl: './padre-lej.component.html',
  styleUrls: ['./padre-lej.component.css']
})
export class PadreLejComponent implements OnInit {

  constructor(public ComunicacionServiceGavilan : ComunicacionServiceGavilanService ) { }

  ngOnInit() {
    // Inicializando
    this.ComunicacionServiceGavilan.mensaje = "BPA";
  }

  setMensajeDesdePadre() {
    this.ComunicacionServiceGavilan.mensaje = "BPA Desde Padre";
  }
}
