import {
  Component,
  DestroyRef,
  OnInit,
  inject,
  effect,
  signal,
  computed,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { filter, interval, map, Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  clickCount = signal(0);
  clickCount$ = toObservable(this.clickCount);
  interval$ = interval(1000);
  intervalSignal = toSignal(this.interval$, { initialValue: 2 });
  customInterval$ = new Observable((subscriber) => {
    let timeExecuted = 0;
    //subcriber.error()
    const interval = setInterval(() => {
      if (timeExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('emitting new value');
      subscriber.next({ message: 'New value' });
      timeExecuted++;
    }, 2000);
  });
  ngOnInit(): void {
    this.customInterval$.subscribe({
      next: (val) => console.log(val),
      complete: () => console.log('completed'),
    });
    // const subscription = interval(1000)
    //   .pipe(
    //     //rxjs operators
    //     //before subscribe
    //     map((val) => val * 2),
    //     filter((val) => val !== 0)
    //   )
    //   .subscribe({
    //     next: (val) => console.log(val),
    //     complete: () => console.log('completed'),
    //     error: (err) => console.log(err),
    //   });
    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    // setInterval(() => {
    //   this.interval.update((previous) => previous + 1);
    // // });
    // this.clickCount$.subscribe((val) => {
    //   const subscription = console.log(
    //     `Clicked button ${this.clickCount()} times`
    //   );
    // });
  }

  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);
  onClick() {
    this.clickCount.update((previous) => previous + 1);
  }
  constructor() {
    // effect(() => {
    //   console.log(`Clicked button ${this.clickCount()} times`);
    // });
    // toObservable(this.clickCount);
  }
}
