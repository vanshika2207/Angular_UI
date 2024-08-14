import {
  Component,
  DestroyRef,
  effect,
  OnDestroy,
  OnInit,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
  host: {
    id: 'status',
  },
})
export class ServerStatusComponent implements OnInit {
  // currentStatus:string = 'online';
  // private interval?: ReturnType<typeof setInterval>;
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  constructor(private destroyRef: DestroyRef) {
    effect((onCleanup) => {
      console.log(this.currentStatus());

      // Register cleanup logic inside the effect
      onCleanup(() => {
        console.log('Cleaning up the effect');
      });
    });
  }
  ngOnInit() {
    console.log('on init');
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
  ngAfterViewInit() {
    console.log('After view init');
  }
  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
function onCleanup(arg0: () => void) {
  throw new Error('Function not implemented.');
}
