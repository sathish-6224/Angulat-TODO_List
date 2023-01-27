import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent {
@Input() taskList:any;
newTask: any;
  addTodo()
  {

    
if(this.newTask!==''|| undefined|| null)
{
  this.taskList.unshift(this.newTask)
    localStorage.setItem('my_tasks',JSON.stringify(this.taskList))
    this.newTask='';
}
else
{
    alert("Please fill the details")
}
   
  }
  
 
}

