import { Component } from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
 
/* import { ComunicacionService } from '../services/comunicacion.service';
import { VarGlobalesService } from '../services/var-globales.service';
import { ConstantsService } from './../services/constants.service';
 */

// ngrx
import { Store } from '@ngrx/store'; 
import { AppState } from '../models/globals.model';

// Navigation
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
   
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  dato$: Observable<any>;

  mostrar = false;

  constructor(private breakpointObserver: BreakpointObserver, 
        private store: Store<AppState>,
        private route: Router ) {
  
    /* this.store.select('titleOpcSelected').subscribe(titleOpcSelected => {
      this.titleOpcSelected = titleOpcSelected; 
    }); */

    this.dato$ = store.select('opcSelected');
    // this.dato$ = store;
    console.log('Constructor of main-nav.component', this.dato$)

  }

  ngOnInit(){

   }

   afterPanelOpenedClosed(event){
    // alert("Expandiendo");
    console.log("Expandiendo Panel!!!!");

    this.route.navigate(['panel']);
   }

   afterCajaOpenedClosed(event){
     console.log("Expandiendo Caja!!!!");
     this.route.navigate(['caja']);
   }

   afterCitasOpenedClosed(event){
    console.log("Expandiendo Citas!!!!");
    this.route.navigate(['citas']);
  }

   onClickIndicators(){
    this.route.navigate(['indicadores']);
   }

   onClickMessaging(){
    this.route.navigate(['clientes']);
   }

   onClickAvatar(){
    this.route.navigate(['juegos']);
   }

}
