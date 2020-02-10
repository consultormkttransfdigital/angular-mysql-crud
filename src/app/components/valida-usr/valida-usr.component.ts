import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as Swiper from 'swiper';

// ngrx
import { Store } from '@ngrx/store';
import { AppState } from '../../models/globals.model'; 
import * as fromMainNav from '../../main-nav/main-nav.actions';
import { Usuario } from '../../models/Usuario';

// Navigation
import { Router } from '@angular/router';

// import { CarouselModule, WavesModule } from 'angular-bootstrap-md'
//var Glider = require("../../../assets/glider.min.js")

const USERS_FRECUENTES_DATA: Usuario[] = [
  {id_usuario: 1, nom_usuario: 'Hydrogen', cargo_usuario: "Estilista", url_usuario: "../../../assets/avatar1.jpg"},
  {id_usuario: 2, nom_usuario: 'Helium', cargo_usuario: "Estilista", url_usuario: "/assets/avatar2.jpg"},
  {id_usuario: 3, nom_usuario: 'Lithium', cargo_usuario: "Estilista", url_usuario: "/assets/avatar3.jpg"},
  {id_usuario: 4, nom_usuario: 'Beryllium', cargo_usuario: "Estilista", url_usuario: "/assets/avatar4.jpg"},
  {id_usuario: 5, nom_usuario: 'Boron', cargo_usuario: "Estilista", url_usuario: "../../../assets/avatar5.jpg"}
];
const USERS_OTROS_DATA: Usuario[] = [
  {id_usuario: 6, nom_usuario: 'Carbon', cargo_usuario: "Estilista", url_usuario: "../../../assets/avatar8.jpg"},
  {id_usuario: 7, nom_usuario: 'Nitrogen', cargo_usuario: "Estilista", url_usuario: "/assets/avatar7.jpg"},
  {id_usuario: 8, nom_usuario: 'Oxygen', cargo_usuario: "Estilista", url_usuario: "/assets/avatar6.jpg"},
  {id_usuario: 9, nom_usuario: 'Fluorine', cargo_usuario: "Estilista", url_usuario: "/assets/avatar5.jpg"},
  {id_usuario: 10, nom_usuario: 'Neon', cargo_usuario: "Estilista", url_usuario: "../../../assets/avatar4.jpg"}
];


@Component({
  selector: 'valida-usr',
  templateUrl: './valida-usr.component.html',
  styleUrls: ['./valida-usr.component.css']
})


export class ValidaUsrComponent implements OnInit, AfterViewInit {
// export class ValidaUsrComponent implements OnInit, AfterViewInit {  

  @ViewChild('swiperContainer', { static: true }) swiper: ElementRef;
  @ViewChild('swiperAdicional', { static: true }) swiperAdi: ElementRef;

  dataSourceUsrFrecuentes = USERS_FRECUENTES_DATA;
  dataSourceUsrOtros = USERS_OTROS_DATA;
   
  constructor(private store: Store<AppState>,
              private route: Router) { 
    console.log("constructor", Swiper);
  }

  ngAfterViewInit(){

    setTimeout(()=>{

      console.log("constructor", this.swiper);

      var swiper = new Swiper.default(this.swiper.nativeElement,{
        // Optional parameters

        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }); 

      var swiper = new Swiper.default(this.swiperAdi.nativeElement,{
        // Optional parameters
  
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }); 
  

    });
    
  }

  ngOnInit() {
  }

  OnSelectedUsrFrecuente(index){

    let usrSeleccionado: Usuario;
    let opcSelected: string = "iniciar-dia";

    usrSeleccionado = {
      id_usuario: this.dataSourceUsrFrecuentes[index].id_usuario,
      nom_usuario: this.dataSourceUsrFrecuentes[index].nom_usuario,
      cargo_usuario: this.dataSourceUsrFrecuentes[index].cargo_usuario,
      url_usuario: this.dataSourceUsrFrecuentes[index].url_usuario
    }

    console.log("OnSelectedUsrFrecuente! ", usrSeleccionado);

    // Seteando usuario seleccionado
    this.store.dispatch(new fromMainNav.ValidaUsuarioAction(usrSeleccionado));

    // Navegando a opción previa seleccionada
    this.route.navigate([opcSelected]);

  }

  OnSelectedUsrOtros(index){

    let usrSeleccionado: Usuario;

    usrSeleccionado = {
      id_usuario: this.dataSourceUsrOtros[index].id_usuario,
      nom_usuario: this.dataSourceUsrOtros[index].nom_usuario,
      cargo_usuario: this.dataSourceUsrOtros[index].cargo_usuario,
      url_usuario: this.dataSourceUsrOtros[index].url_usuario
    }

    console.log("OnSelectedUsrOtros! ", usrSeleccionado);

    // Seteando usuario seleccionado
    this.store.dispatch(new fromMainNav.ValidaUsuarioAction(usrSeleccionado));

  }

}





/* ngAfterViewInit(){

  var nESwiper = this.swiper.nativeElement;
  // var nEGlider = this.glider.nativeElement;
  
  setTimeout(()=>{

    console.log("swiper", nESwiper);
    
    new Swiper(nESwiper, {
    });

  });


} */








/* var swiper = new Swiper.default(this.swiper.nativeElement,{
  // Optional parameters
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}); 
 */



// import { getTreeNoValidDataSourceError } from '@angular/cdk/tree';


/*     new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: '#dots',
        arrows: {
          prev: '.glider-prev',
          next: '.glider-next'
        }
    });
  */


/* 
 OnSelectedUsrFrecuente(index){

  var avatarUsrActivo = document.getElementById("avatar-toolbar");
  var urlUsrSelected;

  // urlUsrSelected = "/assets/avatar1.jpg";
  urlUsrSelected = this.dataSourceUsrOtros[index].url_usuario;

  console.log(avatarUsrActivo);
  console.log("OnSelectedUsrFrecuente! ", index);

  // avatarUsrActivo.style.backgroundColor = "#fff"; 
  avatarUsrActivo.style.backgroundImage = "url(" + urlUsrSelected + ")";

}

OnSelectedUsrOtros(index){

  var avatarUsrActivo = document.getElementById("avatar-toolbar");
  var urlUsrSelected;

  
  urlUsrSelected = "url(" + this.dataSourceUsrOtros[index].url_usuario + ")";

  console.log(avatarUsrActivo);
  console.log("OnSelectedUsrOtros! ", index);

  avatarUsrActivo.style.backgroundImage = urlUsrSelected ;

}
 */