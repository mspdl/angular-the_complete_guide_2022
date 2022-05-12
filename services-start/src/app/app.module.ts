import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AccountComponent } from "./account/account.component";
import { AppComponent } from "./app.component";
import { LogginService } from "./services/logging.service";
import { NewAccountComponent } from "./new-account/new-account.component";

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LogginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
