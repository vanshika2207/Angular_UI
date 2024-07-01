import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template: `<h3>I am in app Component</h3>
  //   <hr />
  //   <app-servers><app-servers></app-servers></app-servers>`,
  // styles: `
  //   h3{
  //     color:blue;
  //   }`,
})
export class AppComponent {
  title = 'hello-world';
}
