import { Component } from '@angular/core';
import { SharedService } from '../sharedservice.service';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrl: './component-1.component.css',
})
export class Component1Component {
  constructor(private sharedstats: SharedService) {}
  statusChange() {
    this.sharedstats.updateStatus('new status from component 1');
  }
}
