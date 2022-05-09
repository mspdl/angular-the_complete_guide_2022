import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent {
  @Output() intervalFired = new EventEmitter<number>();
  @Output() clearEmitter = new EventEmitter();
  lastNumber = 0;
  interval;
  gameStatus = 'Click Start to start the game';
  gameStarted = false;

  startGame() {
    console.log('game started');
    this.gameStatus = 'game started';
    this.gameStarted = true;
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
    console.log('game stoped');
    this.gameStatus = 'game paused';
    this.gameStarted = false;
  }

  cleanGame() {
    this.stopGame();
    this.clearEmitter.emit();
  }
}
