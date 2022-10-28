import { Component, EventEmitter, Output, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {
  @Input() taskArray:any=[];
  @Output() taskCount = new EventEmitter<number>();
  public index!:number;
  public expression=false;
  public editInput!:string;
  constructor() { }

  ngOnInit(): void {
  }
  check(i:number):void{
    this.taskArray[i].status=!this.taskArray[i].status;
    if(this.taskArray[i].status){
      this.taskArray[i].progress='DONE';
      this.taskArray[i].disbtn=false;
      this.taskArray[i].class='done';
    }
    else{
      this.taskArray[i].progress='In PROGRESS';
      this.taskArray[i].disbtn=true;
      this.taskArray[i].class='inprogress';

    }
  }
  editTask(i:number):void{
    this.expression=true;
    this.taskArray[i].disbtn=true;
    this.index=i;
    this.editInput=this.taskArray[i].name;
  }
  saveTask():void{
    this.taskArray[this.index].name=this.editInput;
    this.expression=false;
  }
  deleteTask(i:number):void{
    this.taskArray.splice(i,1);
    this.taskCount.emit(this.taskArray.length);
  }
}
