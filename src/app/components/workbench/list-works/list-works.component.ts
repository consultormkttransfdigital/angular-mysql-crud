import { Component, OnInit } from '@angular/core';

import { ProgramacionesService } from '../../../services/programaciones.service';
import { Programacion } from '../../../models/Programacion';

import { Store } from '@ngrx/store';
import { AppState } from 'src/app/models/globals.model';
import { Observable} from 'rxjs';

// Navigation
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-works',
  templateUrl: './list-works.component.html',
  styleUrls: ['./list-works.component.css']
})
export class ListWorksComponent implements OnInit {

  // Arreglo de Objetos Programaciones para displayar control angular material
    programaciones: Programacion[] = [];

    displayedColumns =
    ['id_programacion', 'fec_programacion', 'id_horario_det', 'id_personal', 'id_cliente', 'est_programacion'];

    dataSource : Programacion[] = [];

    dato$: Observable<any>; 

    MiDato : AppState;



    constructor (public programacionesService: ProgramacionesService, 
      private store: Store<AppState>,
      private route: Router ) { 

        console.log('Constructor of list-works.component!');

        this.store.select('opcSelected').subscribe(
          state => {
            console.log('Subscribe of list-works.component!');
            this.dato$ = state;
            this.MiDato = JSON.parse(JSON.stringify(state));

            this.LoadListWorks();
                                   
            // console.log("!1!", state);
            // console.log("!2!", this.MiDato.titleOpcSelected);
          } 
        );
        
        

    }

  ngOnInit() {
  }

  // Toma los filtros desde el estado de la App
  // Recupera los registros conforme el filtro recogido
  LoadListWorks(){

    /* let fecha = this.dato$.fechaProgramacion;  
    let vista = this.dato$.vista;
    let estado = this.dato$.estado; */

    // let fecha = new Date(this.MiDato.fechaProgramacion.getFullYear(),
    //                      this.MiDato.fechaProgramacion.getMonth(),
    //                      this.MiDato.fechaProgramacion.getDate());  

    let fecha = new Date(this.MiDato.fechaProgramacion);
    let vista = this.MiDato.vista;
    let estado = 1;

    console.log('LoadListWorks!', this.MiDato.fechaProgramacion);
    console.log(fecha, vista, estado);

    this.programacionesService.getProgramaciones(fecha, vista, estado) 
      .subscribe(
        programaciones => {
          console.log(programaciones),
          this.programaciones = programaciones;
          this.dataSource = programaciones;
          console.log(this.dataSource);
        },
        err => console.log(err) 
      )

  }

  onIniciarDia(){
    this.route.navigate(['valida-usr']);
  }

}





/* 
chips = [
  {name: 'Iniciar Día'},
  {name: 'Arribo de Cliente'}
];

 */

/*
changeSelected(e) {
  console.log(e);
  // this.actionSelected = e.value;
  alert(e.value);
} */











/* export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; */