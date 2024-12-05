import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';

const routes: Routes = [
  { path : 'create-task', component: CreateTasksComponent},
  { path : 'view-tasks', component: ViewTasksComponent},
  { path : '', redirectTo: '/create-task', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
