import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
   
  constructor(){  
  }

  ngOnInit() {
  }

}




/*   onActivate(event){
    window.scroll(0,0);
  } */
