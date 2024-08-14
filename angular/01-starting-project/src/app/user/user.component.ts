import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';
// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// };

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Output() select = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;
  // avatar = input.required<string>();
  // name = input('');
  // select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  // imagePath = computed(() => 'assets/users/' + this.avatar());
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
