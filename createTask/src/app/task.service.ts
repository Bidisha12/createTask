import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Task {
  taskName: string;
  description: string;
  assignee: string;
  startDate: string;
  dueDate: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskList: Task[] = [];
  private taskListSubject = new BehaviorSubject<Task[]>(this.taskList);

  // Observable to share the task list with subscribers
  taskList$ = this.taskListSubject.asObservable();

  // Add a task to the task list
  addTask(task: Task): void {
    this.taskList.push(task);
    this.taskListSubject.next(this.taskList);  // Notify subscribers with the updated task list
  }
}
