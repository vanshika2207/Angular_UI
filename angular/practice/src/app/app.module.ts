import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TextstyleDirective } from './textstyle.directive';
import { HostdirectiveDirective } from './hostdirective.directive';
import { StructuralDirective } from './structural.directive';
import { Component1Component } from './component-1/component-1.component';
import { Component2Component } from './component-2/component-2.component';

@NgModule({
  declarations: [AppComponent, HighlightDirective, TextstyleDirective, HostdirectiveDirective, StructuralDirective, Component1Component, Component2Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
