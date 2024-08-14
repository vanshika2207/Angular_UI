import { Component, input, inject, computed } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterOutlet],
})
export class UserTasksComponent {
  userId = input.required<string>();
  private usersService = inject(UsersService);
  private activatedRouted = inject(ActivatedRoute);
  userName = computed(
    () => this.usersService.users.find((u) => u.id === this.userId())?.name
  );
  ngOnInit() {
    console.log(this.activatedRouted);
    // this.activatedRouted.paramMap.subscribe((response) => {
    //   this.usersService.users.find((u) => u.id == response.get('userId'))
    //     ?.name || '';
    // });
  }
}
