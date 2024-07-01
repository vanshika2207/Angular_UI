import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';
import { InjectableService } from './injectable.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, InjectableService],
})
export class AppComponent implements OnInit {
  numbers = [2, 5, 7];
  value = 6;

  constructor(
    private logservice: LoggingService,
    private account: InjectableService
  ) {}

  ngOnInit(): void {
    this.account.addAccount('new');
  }
}
