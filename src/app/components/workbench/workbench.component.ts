import { Component, OnInit } from '@angular/core';

// ngrx
import { Store }  from '@ngrx/store';
import { AppState } from '../../models/globals.model';
import { PanelAction, PanelFilterAction, PanelFilterVistaAction } from 'src/app/main-nav/main-nav.actions';

// Navigation
import { Router } from '@angular/router';

@Component({
  selector: 'app-workbench',
  templateUrl: './workbench.component.html',
  styleUrls: ['./workbench.component.css']
})
export class WorkbenchComponent implements OnInit {

  vistaSelected: string;
  fechaSelected: Date;

  constructor(private store: Store<AppState>,
              private route: Router ) { }

  ngOnInit() {
    
    console.log('Entrando a Worbench');
    const accion = new PanelAction('Panel de trabajo');
    this.store.dispatch(accion);

    this.iniFilters();

   }

   iniFilters(){
    // let fecha = new Date("2019/11/19");
    this.fechaSelected = new Date("2019/11/19");
    this.vistaSelected = "1";
    console.log('Inicializando Filtros');
    // console.log(fecha);
    console.log(this.fechaSelected);
    // const accion = new PanelFilterAction(fecha); 
    const accion1 = new PanelFilterAction(this.fechaSelected); 
    this.store.dispatch(accion1);
    const accion2 = new PanelFilterVistaAction(this.vistaSelected); 
    this.store.dispatch(accion2);
   }

   onChangeFecha(param){
     let fecha = param.value
     // console.log(param);
     // console.log(param.value); 
     console.log('OnChangeFecha()', fecha);
     const accion = new PanelFilterAction(fecha); 
     this.store.dispatch(accion);

     this.route.navigate(['panel']);

   }

   onChangeVista(param){
     let vista = param.value
     console.log(param);
     console.log(param.value); 
     console.log('OnChangeVista()', vista);
     const accion = new PanelFilterVistaAction(vista); 
     this.store.dispatch(accion);

     this.route.navigate(['panel']);

   }

   
  
}
