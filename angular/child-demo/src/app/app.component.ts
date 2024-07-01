import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  userLoggedin = false;
  @ViewChild(ChildComponent, { static: false })
  childComponentRef: ChildComponent;
  ngAfterViewInit() {
    this.childComponentRef.message2 = 'Message from parent';
  }
}
