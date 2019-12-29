import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo1',
  templateUrl: './ejemplo1.component.html',
  styleUrls: ['./ejemplo1.component.css']
})
export class Ejemplo1Component implements OnInit {

  contador: number;

  constructor() { 
    this.contador = 10;
  }

  incrementar() {
    this.contador ++;
  }

  decrementar() {
    this.contador --;
  }

  ngOnInit() {
  }

}
