import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

// Especificando mejor el tipo de dato de retorno del get
import { Programacion } from '../models/Programacion';

var toType = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()
}

@Injectable({
  providedIn: 'root'
})
export class ProgramacionesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient ) { } 
  
  getProgramaciones(fecha:Date, vista: number, estado: number){
    
    let id: number;
    let url = this.API_URI + '/programaciones';
    let params = new HttpParams();
    // let ls_fecha = '20191120'; // La fecha debe pasar en este formato
    let dia: string = fecha.getDate().toString();
    let mes: string = (fecha.getMonth() + 1).toString();
    let anno = (fecha.getFullYear()).toString();
    let ls_fecha: string;

    dia = +dia < 10 ? '0' + dia : dia;
    mes = +mes < 10 ? '0' + mes : mes;
    ls_fecha = anno + mes + dia;

    console.log('getProgramaciones()!', fecha, ls_fecha, toType(fecha), vista, estado);

    params = params.append('id', '');
    params = params.append('fecha', ls_fecha);
    params = params.append('vista', vista.toString());
    params = params.append('estado', estado.toString());
    
    // return this.http.get<Programacion[]>(`${this.API_URI}/programaciones`);
    // return this.http.get<Programacion[]>(`${this.API_URI}/programaciones/${id}/${ls_fecha}/${vista}/${estado}`);
    return this.http.get<Programacion[]>(url, { params });
  }

}





/* 

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get<Game[]>(`${this.API_URI}/games`);
  }
} */
