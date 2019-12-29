import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../services/games.service';
import { Game } from '../../models/Game';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {

  // Arreglo de Objetos Games para displayar control de material
  games: Game[] = [];

  constructor(public gamesService: GamesService) { }

  ngOnInit(){
    this.gamesService.getGames()
      .subscribe(
        games => {
          console.log(games),
          this.games = games;
        },
        err => console.log(err)
      )

  }

}
