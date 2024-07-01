import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultquestion = 'pet';
  answer = '';
  default = 'female';
  genders = ['male', 'female'];
  @ViewChild('f') signedupForm: NgForm;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;
  onSubmit() {
    this.submitted = true;
    (this.user.username = this.signedupForm.value.userData.username),
      (this.user.email = this.signedupForm.value.userData.email),
      (this.user.secretQuestion = this.signedupForm.value.secret),
      (this.user.answer = this.signedupForm.value.questionAnswer),
      (this.user.gender = this.signedupForm.value.gender);
    this.signedupForm.reset();
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signedupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });
    this.signedupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
}
