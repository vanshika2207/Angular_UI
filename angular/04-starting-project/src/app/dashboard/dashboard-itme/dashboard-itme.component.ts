import { Component, input, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard-itme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dashboard-itme.component.html',
  styleUrl: './dashboard-itme.component.css',
  // encapsulation: ViewEncapsulation.None,
  host: {
    class: 'dashboard-item',
  },
})
export class DashboardItmeComponent {
  image = input.required<{ src: string; alt: string }>();
  title = input.required<string>();
}
