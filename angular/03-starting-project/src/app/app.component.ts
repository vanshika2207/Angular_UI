import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  userVal!: {
    initialInvestment: string;
    annualInvestment: string;
    expectedReturn: string;
    duration: string;
  };
  annualData: any[] = [];
  calculate(val: {
    initialInvestment: string;
    annualInvestment: string;
    expectedReturn: string;
    duration: string;
  }) {
    this.userVal = val;
    console.log(this.userVal);

    let investmentValue = +this.userVal.initialInvestment;

    for (let i = 0; i < +this.userVal.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (+this.userVal.expectedReturn / 100);
      investmentValue += interestEarnedInYear + +this.userVal.annualInvestment;
      const totalInterest =
        investmentValue -
        +this.userVal.annualInvestment * year -
        +this.userVal.initialInvestment;
      this.annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: this.userVal.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          +this.userVal.initialInvestment +
          +this.userVal.annualInvestment * year,
      });
    }
    console.log(this.annualData);
    return this.annualData;
  }
}
