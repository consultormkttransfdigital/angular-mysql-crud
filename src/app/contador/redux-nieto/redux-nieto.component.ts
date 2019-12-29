import { Component, OnInit } from '@angular/core';

// import { Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateContador } from '../contador.app.reducers';
import { ResetearAction } from '../contador.actions';

@Component({
  selector: 'app-redux-nieto',
  templateUrl: './redux-nieto.component.html',
  styleUrls: ['./redux-nieto.component.css']
})
export class ReduxNietoComponent implements OnInit {

  contador: number;
// @Input() contador: number;
// @Output() contadorCambio = new EventEmitter<number>();

  constructor(private store: Store<AppStateContador>) { }

  reset(){
    const accion = new ResetearAction();
    this.store.dispatch(accion);

    // this.contador = 0;
    // this.contadorCambio.emit(this.contador);
  }


  ngOnInit() {
    this.store.select('contador')
      .subscribe( contador => this.contador = contador );
  }

}





