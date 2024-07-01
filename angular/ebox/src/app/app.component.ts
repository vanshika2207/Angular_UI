import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  edge: string;
  size: string;
  appliedClasses: string[] = [];

  applyStyle(): void {
    console.log(this.edge);
    console.log(this.size);
    this.appliedClasses = [this.edge, this.size];
  }

  //Fill yoour code here
}
