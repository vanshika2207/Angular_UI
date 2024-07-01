import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
@Injectable({
  providedIn: 'root',
})
export class InjectableService {
  constructor(private loggingService: LoggingService) {}

  addAccount(status: string) {
    this.loggingService.logStatusChange('new');
  }
}
