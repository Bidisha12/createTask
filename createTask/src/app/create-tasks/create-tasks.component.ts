import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css']
})
export class CreateTasksComponent {
  createTaskForm!: FormGroup;
  employees: string[] = ['E1', 'E2', 'E3', 'E4', 'E5']; // Dummy employee list
  statusOptions: string[] = ['To Start', 'In Progress', 'Completed', 'Due']; // Status options
  taskLists: any[] = [];
  isTaskAdded: boolean = false;

  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {
    this.createTaskForm = this.fb.group({
      taskName: ['', Validators.required],
      description: ['', Validators.required],
      assignee: ['', Validators.required],
      startDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.createTaskForm.valid) {
      const newTask: Task = this.createTaskForm.value;
      this.taskService.addTask(newTask);  // Add the new task using TaskService
      this.isTaskAdded = true;
      this.createTaskForm.reset();  // Reset the form after submission
    } else {
      console.log('Form is invalid');
    }
  }
}

