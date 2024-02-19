import { Component } from '@angular/core';
import { Todo } from '../../todo';
import { LocalizedString } from '@angular/compiler';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  localItem: string;
  todos:Todo[];

  constructor(){
    if (typeof localStorage !== 'undefined') {
      this.localItem = localStorage.getItem("todos")!;
      if (this.localItem === null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    } else {
      this.localItem = '';
      this.todos = [];
    }
  }

  deleteTodo(todo: Todo){
    const index= this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    console.log(todo);
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }

  toggleTodo(todo: Todo){
    const index= this.todos.indexOf(todo);
    this.todos[index].active= !this.todos[index].active
    localStorage.setItem("todo", JSON.stringify(this.todos));
  }
}
