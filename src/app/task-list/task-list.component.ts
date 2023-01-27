import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks:any;
  searchText:any;
  constructor()
  {}
  ngOnInit(): void{

  }

  onRemove(index : number)
  {
    
    this.tasks.splice(index ,1)
    localStorage.setItem('my_tasks',JSON.stringify(this.tasks))
  }


}
