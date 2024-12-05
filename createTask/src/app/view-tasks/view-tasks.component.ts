import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from '../task.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {
  taskList: Task[] = [];
  filteredTasks: Task[] = [];
  filterForm!: FormGroup;  // Form for filtering tasks
  statusOptions: string[] = ['To Start', 'In Progress', 'Completed', 'Due'];  // Status options
  assignees: string[] = ['E1', 'E2', 'E3', 'E4', 'E5']; 
  taskStatus: string = '';
  selectedAssignee: string = '';
  selectedStatus: string = '';
  selectedStartDate: string = '';
  selectedDueDate: string = '';
  isStatusChanged: boolean = false;

  constructor(private taskService: TaskService, private fb: FormBuilder) {}
  ngOnInit() : void {
     // subscribe to the observable to get the updated tasklist
     this.taskService.taskList$.subscribe(tasks => {  
      this.taskList = tasks;
      console.log(this.taskList);
    })

    this.filterForm = this.fb.group({
      status: [''],
      assignee: [''],
      startDate: [''],
      endDate: ['']
    });
    this.filteredTasks = [...this.taskList]; // Initialize filteredTasks with the full task list
  }

  onChangeAssignee(task : any, event : any) {
    task.assignee = event.target.value;
  }

  onChangeStatus(task : any, event : any) {
    task.status = event.target.value;
    this.isStatusChanged = true;
    setTimeout(()=> {
      this.isStatusChanged = false;
    }, 3000)
    
  }
  
  filterAssignee() {
    this.filteredTasks = this.taskList.filter(task => {
      let match = true;
      if (this.selectedAssignee && task.assignee !== this.selectedAssignee) {
        match = false;
      }
      return match;
    })
  }
  filterStatus() {
    this.filteredTasks = this.taskList.filter(task => {
      let match = true;
      if (this.selectedStatus && task.status !== this.selectedStatus) {
        match = false;
      }
      return match;
    })
  }

  filterDate() {
    // Filter by date range
    this.filteredTasks = this.taskList.filter(task => {
    let match = true;
    if (this.selectedStartDate && new Date(task.dueDate) < new Date(this.selectedStartDate)) {
      match = false;
    }
    if (this.selectedDueDate && new Date(task.dueDate) > new Date(this.selectedDueDate)) {
      match = false;
    }
    return match;
  })
  }

  resetFilter() {
    // Reset the filter values
    this.selectedAssignee = '';
    this.selectedStartDate = '';
    this.selectedDueDate = '';
    this.selectedStatus = '';
    this.filteredTasks = [...this.taskList];  // Reset the task list to all tasks
  }

}
