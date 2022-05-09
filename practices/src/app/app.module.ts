import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Practice01Component } from './practice01/practice01.component';
import { SuccessAlertComponent } from './practice01/success-alert/success-alert.component';
import { WarningAlertComponent } from './practice01/warning-alert/warning-alert.component';
import { Practice02Component } from './practice02/practice02.component';
import { Practice03Component } from './practice03/practice03.component';
import { EvenComponent } from './practice04/even/even.component';
import { GameControlComponent } from './practice04/game-control/game-control.component';
import { OddComponent } from './practice04/odd/odd.component';
import { Practice04Component } from './practice04/practice04.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Practice01Component,
    Practice02Component,
    Practice03Component,
    Practice04Component,
    GameControlComponent,
    OddComponent,
    EvenComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
