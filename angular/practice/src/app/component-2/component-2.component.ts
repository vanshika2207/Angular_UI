import { Component, OnInit } from '@angular/core';
import { SharedService } from '../sharedservice.service';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrl: './component-2.component.css',
})
export class Component2Component implements OnInit {
  status: string;
  constructor(private sharedstats: SharedService) {}
  ngOnInit() {
    this.sharedstats.status$.subscribe((status) => {
      this.status = status;
    });
  }
}
