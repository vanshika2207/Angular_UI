import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  pageTitle = 'Angular Component Interaction';
  imageUrl = 'https://picsum.photos/200';
  count = 0;
  message = '';
  eventMessage = 'hello';
  name = 'hello';
  username: string;
  private _customername: string;
  motherName: string = '';
  @ViewChild('nameRef', { static: false }) nameElementRef: ElementRef;

  get customerName(): string {
    return this._customername;
  }
  set customerName(value: string) {
    this._customername = value;

    if (value == 'Vanshika') {
      alert('welcome Vanshika');
    }
  }
  incrementCount() {
    this.count += 1;
  }
  handleClick(message: string) {
    this.message = message;
  }
  eventClick(event: Event) {
    this.eventMessage = (<HTMLInputElement>event.target).value;
  }
  greetVanshika(updatedValue) {
    this.username = updatedValue;
    if (updatedValue == 'Vanshika') {
      alert('welcome Vanshika');
    }
  }
  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }
}
