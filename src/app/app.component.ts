import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My_Task_List';
  taskList:string[]=[]

  ngOnInit():void{
    if(localStorage.getItem('my_tasks'))
    {
      this.taskList=JSON.parse(localStorage.getItem('my_tasks')||'{}')
      console.log(this.taskList)
    }
  


  }
}
