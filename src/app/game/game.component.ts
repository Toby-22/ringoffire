import { Component } from '@angular/core';
import { Game } from '../../models/game';
import {MatDialog,} from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})
export class GameComponent {
  picCardAnimation: boolean = false;
  game: Game;
  currentCard: string = '';

  constructor(public dialog: MatDialog) {
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

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
