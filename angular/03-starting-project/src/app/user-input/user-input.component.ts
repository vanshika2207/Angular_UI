import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment!: string;
  annualInvestment!: string;
  expectedReturn!: string;
  duration!: string;

  @Output() emitUser = new EventEmitter<{
    initialInvestment: string;
    annualInvestment: string;
    expectedReturn: string;
    duration: string;
  }>();
  onCalculate() {
    const userInput = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };
    console.log(userInput);
    this.emitUser.emit(userInput);
  }
}
