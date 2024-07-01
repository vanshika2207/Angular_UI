import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input() element: { type: string; name: string; content: string };
  @Input() name: string;
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnchanges called');
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnit called');
  }
  ngDoCheck() {
    console.log('ngDocheck called');
  }
  ngAfterContentInit() {
    console.log('ng after content init');
  }
  ngAfterContentChecked() {
    console.log('ng after content checked');
  }
}
