import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// Especificando mejor el tipo de dato de retorno del get
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get<Game[]>(`${this.API_URI}/games`);
  }
}
