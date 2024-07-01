import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class SharedService {
  private statusSource = new Subject<string>();
  status$ = this.statusSource.asObservable();
  updateStatus(status: string) {
    this.statusSource.next(status);
  }
}
