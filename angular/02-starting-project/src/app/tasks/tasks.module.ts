import { NgModule } from '@angular/core';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from '../shared/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TaskComponent, TasksComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [CommonModule, SharedModule, FormsModule],
})
export class TasksModule {}
