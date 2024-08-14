import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  FormArray,
  AbstractControl,
} from '@angular/forms';

function equalValues(control: AbstractControl) {
  const password = control.get('password')?.value;
  const confirmedPassword = control.get('confirmedPassword')?.value;
  if (password === confirmedPassword) {
    return null;
  }
  return { passwordNotEqual: false };
}
@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  imports: [ReactiveFormsModule],
})
export class SignupComponent {
  form = new FormGroup(
    {
      email: new FormControl('', [Validators.email, Validators.required]),
      passwords: new FormGroup({
        password: new FormControl('', [
          Validators.minLength(6),
          Validators.required,
        ]),
        confirmedPassword: new FormControl('', [
          Validators.minLength(6),
          Validators.required,
        ]),
      }),

      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl('', [Validators.required]),
        number: new FormControl('', [Validators.required]),
        postalCode: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
      }),

      role: new FormControl<
        'student' | 'teacher' | 'employee' | 'founder' | 'other'
      >('student', [Validators.required]),
      source: new FormArray([
        new FormControl(false),
        new FormControl(false),
        new FormControl(false),
      ]),
      agree: new FormControl(false, Validators.required),
    },
    {
      validators: [equalValues],
    }
  );
  onSubmit() {
    if (this.form.invalid) {
      console.log('invalid message');
    }
    console.log(this.form);
  }
  reset() {
    this.form.reset();
  }
}
