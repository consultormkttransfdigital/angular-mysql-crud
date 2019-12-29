import { Component, OnInit } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import { EgresosAction } from '../../main-nav/main-nav.actions'

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  datosGeneralesFormGroup: FormGroup;
  ingresoFormGroup: FormGroup;

  constructor(private store: Store<AppState>,
              private _formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('Entrando a Egresos');
    const accion = new EgresosAction('Egresos'); 
    this.store.dispatch(accion); 

    this.datosGeneralesFormGroup = this._formBuilder.group({
      idIngreso: [0],
      origenIngreso: [0],
      codIngreso: [0],
      fecIngreso: [ new Date()],
      idPersonal: [0],
      totIngreso: [0],
      firstCtrl: ['', Validators.required]
    });
    this.ingresoFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

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
