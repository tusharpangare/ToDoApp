import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo:Todo;
  @Input() i:Number;
  @Output() todoDelete: EventEmitter <Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter <Todo> = new EventEmitter();

  constructor(){}

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("Onclick has been triggered.");
  }
  onCheckBoxClick(todo:Todo){
    this.todoCheckbox.emit(todo);
    console.log("Checkbox toggle triggered");
  }

}
