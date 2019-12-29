import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'; 
import { IncrementarAction, DecrementarAction } from '../contador.actions';
import { AppStateContador } from '../contador.app.reducers';

@Component({
  selector: 'app-redux',
  templateUrl: './redux.component.html',
  styleUrls: ['./redux.component.css']
})
export class ReduxComponent implements OnInit {

  contador: number;

  constructor(private store: Store<AppStateContador> ) { 
    // this.contador = 10;

    // Con esto se hace una subscripción total al estado
    /* this.store.subscribe( state => {
      this.contador = state.contador;
      console.log(state);
    }); */

    /* this.store.select('contador').subscribe( state => {
      //this.contador = state.contador;
      console.log(state);
    }); */

    this.store.select('contador').subscribe( contador => {
      this.contador = contador;
    });


  }

  incrementar() {
    // this.contador ++;
    /* const accion: Action = {
      type: 'INCREMENTAR'
    }; */

    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar() {
    // this.contador --;
  /*   const accion: Action = {
      type: 'DECREMENTAR'
    };
     */

    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }


  ngOnInit() {
  }

}





  