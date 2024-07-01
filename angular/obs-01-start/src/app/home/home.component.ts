import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObseSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    const customIntervalObservable = new Observable<number>((observer) => {
      let count = 0;
      const intervalId = setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
          clearInterval(intervalId); // Clear the interval to stop further emissions
        }
        if (count > 3) {
          observer.error(new Error('number is greater than 3'));
          clearInterval(intervalId); // Clear the interval in case of error
        }
        count++;
      }, 1000);
    });

    this.firstObseSubscription = customIntervalObservable
      .pipe(
        filter((data) => data % 2 == 0),
        map((data) => `Rounded :,${data}`)
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.log('completed');
        }
      );
  }

  ngOnDestroy(): void {
    if (this.firstObseSubscription) {
      this.firstObseSubscription.unsubscribe();
    }
  }
}
