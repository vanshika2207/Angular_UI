import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighLightDirective } from './better-highlight/better-high-light.directive';
import { UnlessDirective } from './unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighLightDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
