import { Component, OnInit } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import { IngresosAction } from '../../main-nav/main-nav.actions'

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { OrigenIngreso } from '../../models/origen-ingreso.enum';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {

  datosGeneralesFormGroup: FormGroup;
  ingresoFormGroup: FormGroup;
  origenesIngreso: any[] = [];

  constructor(private store: Store<AppState>,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('Entrando a Ingresos');
    const accion = new IngresosAction('Ingresos'); 
    this.store.dispatch(accion); 

    this.datosGeneralesFormGroup = this._formBuilder.group({
      idIngreso: [0],
      origenIngreso: [ OrigenIngreso.Venta ],
      codIngreso: [0],
      fecIngreso: [ new Date()],
      idPersonal: [0],
      totIngreso: [0],
      firstCtrl: ['', Validators.required]
    });
    this.ingresoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    for (let item in OrigenIngreso){
      if(isNaN(Number(item))){
        this.origenesIngreso.push({text: item, value: OrigenIngreso[item]});
      }
    }

  }

  onChangeFecha(param){

/*     let fecha = param.value
    // console.log(param);
    // console.log(param.value); 
    console.log('OnChangeFecha()', fecha);
    const accion = new PanelFilterAction(fecha); 
    this.store.dispatch(accion);

    this.route.navigate(['panel']);
 */
  }

}
