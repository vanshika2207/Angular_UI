import {
  Component,
  ElementRef,
  EventEmitter,
  output,
  Output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  enteredTitle = '';
  enteredText = '';
  @ViewChild('form')
  form?: ElementRef<HTMLFormElement>;
  // @Output() add=new EventEmitter();
  add = output<{ title: string; text: string }>();
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit() {
    // console.log(titleElement);
    // console.log(ticketText);
    this.add.emit({ title: this.enteredTitle, text: this.enteredText });
    // this.form?.nativeElement.reset();
    this.enteredText = '';
    this.enteredTitle = '';
  }
  ngOnInit() {
    console.log('init');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log('After view init');
    console.log(this.form?.nativeElement);
  }
}
