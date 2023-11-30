import { Component } from '@angular/core';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  picCardAnimation: boolean = false;
  game: Game;
  currentCard: string = '';

  constructor() {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.picCardAnimation) {
      this.currentCard = this.game.stack.pop();
      console.log(this.currentCard);

      this.picCardAnimation = true;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        console.log(this.game.playedCards);
        this.picCardAnimation = false;
      }, 1000);
    }
  }
}
