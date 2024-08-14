import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskComponent } from './tasks/task/task.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { UserComponent } from './user/user.component';
import { CardComponent } from './shared/card/card.component';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    UserComponent,
    // CardComponent,
  ],
  bootstrap: [AppComponent],
  // imports: [
  //   HeaderComponent,
  //   TaskComponent,
  //   TasksComponent,
  //   NewTaskComponent,
  //   UserComponent,
  //   CardComponent,
  //   BrowserModule,
  // ],
  imports: [BrowserModule, SharedModule, TasksModule],
})
export class AppModule {}
