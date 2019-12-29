import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateContador } from '../contador.app.reducers';
import { MultiplicarAction, DividirAction } from '../contador.actions'; 

// Ya no se necesitan cuando se trabaja con Redux
//import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-redux-hijo',
  templateUrl: './redux-hijo.component.html',
  styleUrls: ['./redux-hijo.component.css']
})
export class ReduxHijoComponent implements OnInit {

  contador: number;

  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  constructor(private store: Store<AppStateContador> ) { }

  // Los eventEmitter se convertirán en Dispatch

  multiplicar() {
    const accion = new MultiplicarAction(5);
    // Luego hay que mandar el dispatch para que escuchen el cambio
    this.store.dispatch(accion); 

    // this.contador *= 2;
    // this.cambioContador.emit(this.contador);
  }

  dividir() {
    const accion = new DividirAction(5);
    this.store.dispatch(accion);

    // this.contador /= 2;
    // this.cambioContador.emit(this.contador);
  }

  resetNieto(nuevoContador) {
    // this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }


  // Se necesita subscribirse para escuchar los cambios de estado
  ngOnInit() {
    this.store.select('contador')
      .subscribe( contador => {
        this.contador = contador;
        console.log(contador); 
      });
  }

}




  