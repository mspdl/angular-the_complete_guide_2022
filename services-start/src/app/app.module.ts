import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AccountComponent } from "./account/account.component";
import { AppComponent } from "./app.component";
import { NewAccountComponent } from "./new-account/new-account.component";
import { AccountService } from "./services/account.service";
import { LogginService } from "./services/logging.service";

@NgModule({
  declarations: [AppComponent, AccountComponent, NewAccountComponent],
  imports: [BrowserModule, FormsModule],
  providers: [AccountService, LogginService],
  bootstrap: [AppComponent],
})
export class AppModule {}
