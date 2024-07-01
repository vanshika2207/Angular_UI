import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() greetEvent = new EventEmitter();
  name = 'vanshika';
  callParentGreet() {
    // alert('Sending message');
    this.greetEvent.emit(this.name);
  }
}
