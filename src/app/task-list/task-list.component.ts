import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  public countTask!: number;
  public index = 0;
  public task = {
    status: false,
    name: '',
    progress: 'In PROGRESS',
    disbtn: true,
    class:'inprogress',
  };
  public objectArray: Object[] = [];
  public taskName = ' ';
  constructor() { }

  ngOnInit(): void {
  }
  addTask(): void {
    if (this.taskName) {
      this.task.status = false;
      this.task.name = this.taskName;
      this.objectArray[this.index] = Object.assign({}, this.task);
      this.index++;
      this.countTask = this.objectArray.length;
      this.taskName = '';
    }
    else{
      alert('error!');
    }

  }
  getCount(count: number): void {
    this.countTask = count;
  }
}
