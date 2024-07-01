import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Question } from '../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  @Input() index: number;
  @Output() edit = new EventEmitter<number>();

  ngOnInit() {}

  public emitQuestionId(id: number) {
    this.edit.emit(id);
  }
}
