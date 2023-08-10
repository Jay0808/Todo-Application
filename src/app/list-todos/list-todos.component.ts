import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {
constructor(
  public id: number,
  public description: string,
  public done: boolean,
  public targetDate: Date)
  {
}
todos=[
  {id: 1,description:'Learn to Dance'},
  {id: 2,description:'Learn Angular'},
  {id: 3,description:'Visit France'},
]
}