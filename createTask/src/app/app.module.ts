import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTasksComponent,
    ViewTasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
