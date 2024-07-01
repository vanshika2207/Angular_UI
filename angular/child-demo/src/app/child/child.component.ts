import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnChanges {
  @Input() loggedin: boolean;

  name = 'vanshika';
  greet() {
    alert('Hello');
  }
  // loggedin = true;
  message: string;
  message2: string;
  // get loggedin(): boolean {
  //   return this._loggedin;
  // }
  // @Input() set loggedin(value: boolean) {
  //   this._loggedin = value;
  //   if (value == true) {
  //     this.message = 'Welcome back';
  //   } else {
  //     this.message = 'Please login ';
  //   }
  // }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    const value = changes['loggedin'];
    if (value.currentValue == true) {
      this.message = 'welcome back';
    } else {
      this.message = 'Please login';
    }
  }
}
