import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { of } from 'rxjs';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule, FormsModule],
})
export class LoginComponent {
  form!: FormGroup;
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(
        '',
        [Validators.email, Validators.required],
        this.emailIsUnique
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        this.mustContainQuestionMark,
      ]),
    });
    this.form.valueChanges.subscribe();
  }

  onSubmit() {
    console.log(this.form);
    console.log(this.form.value.email);
    console.log(this.form.get('email')?.value);
  }
  mustContainQuestionMark(control: AbstractControl) {
    if (control.value.includes('?')) {
      return null;
    }
    return { doesNotContain: true };
  }
  emailIsUnique(control: AbstractControl) {
    if (control.value !== 'test@example.com') {
      return of(null);
    }
    return of({ notUnique: true });
  }
}
