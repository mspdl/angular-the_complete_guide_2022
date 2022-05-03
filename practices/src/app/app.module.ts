import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Practice01Component } from './practice01/practice01.component';
import { SuccessAlertComponent } from './practice01/success-alert/success-alert.component';
import { WarningAlertComponent } from './practice01/warning-alert/warning-alert.component';
import { Practice02Component } from './practice02/practice02.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    Practice01Component,
    Practice02Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
