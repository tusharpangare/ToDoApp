import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoApp';
  
  constructor(){
  //   // setTimeout is used to perform some code defined in it after some time
  //   setTimeout(() => {
  //     this.title="Changed Title";
  //   }, 2000);
   }
}
