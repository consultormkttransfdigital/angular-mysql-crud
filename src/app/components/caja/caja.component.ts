import { Component, OnInit } from '@angular/core';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import { CajaAction } from '../../main-nav/main-nav.actions';

import { IngresosService } from '../../services/ingresos.service';
import { Ingreso } from '../../models/Ingreso';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

/* const ELEMENT_DATA: PeriodicElement[] = [
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


@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  ingresos: any = [];


  displayedColumns: string[] = ['id_ingreso', 'origen_ingreso', 'fec_ingreso', 'id_persona', 'tot_ingreso', 'created_at'];
  dataSource : Ingreso[];

  constructor(private store: Store<AppState>,
              private ingresosService: IngresosService) { }

  ngOnInit() {
    console.log('Entrando a Caja');
    const accion = new CajaAction('Caja'); 
    this.store.dispatch(accion); 

    // Mostrando por ahora los ingresos registrados
    this.ingresosService.getIngresos().subscribe(
      res => {
        console.log(res);
        this.ingresos = res;

        this.dataSource = res;

      },
      err => console.error(err)
    );
  }

}
