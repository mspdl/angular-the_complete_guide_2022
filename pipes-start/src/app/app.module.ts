import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { ShortenPipe } from "./short.pipe";
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse.pipe';

@NgModule({
  declarations: [AppComponent, ShortenPipe, FilterPipe, ReversePipe],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
