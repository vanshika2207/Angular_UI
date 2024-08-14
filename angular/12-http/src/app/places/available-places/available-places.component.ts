import { Component, signal, inject, OnInit, DestroyRef } from '@angular/core';
import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);
  private service = inject(PlacesService);
  ngOnInit(): void {
    this.isFetching.set(true);
    const subscription = this.service.loadAvailablePlaces().subscribe({
      next: (places) => {
        this.places.set(places);
      },
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
  onSelectPlace(selectedPlace: Place) {
    const subsciption = this.service
      .addPlaceToUserPlaces(selectedPlace)
      .subscribe((response) => console.log(response));
    this.destroyRef.onDestroy(() => {
      subsciption.unsubscribe();
    });
  }
}
