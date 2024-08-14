import { Component, signal, DestroyRef, inject, OnInit } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { catchError, map, throwError } from 'rxjs';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  // places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private destroyRef = inject(DestroyRef);
  private service = inject(PlacesService);
  places = this.service.loadedUserPlaces;
  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.service.loadUserPlaces().subscribe({
      complete: () => {
        this.isFetching.set(false);
      },
      error: (error: Error) => {
        console.log(error);
        this.error.set(error.message);
      },
    });
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  onRemovePlace(place: Place) {
    const subscription = this.service.removeUserPlace(place).subscribe();
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
