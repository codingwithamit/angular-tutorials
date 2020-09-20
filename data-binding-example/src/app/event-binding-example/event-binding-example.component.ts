import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding-example',
  templateUrl: './event-binding-example.component.html',
  styleUrls: ['./event-binding-example.component.css']
})
export class EventBindingExampleComponent implements OnInit {
message="Hello Coding With Amit";
  constructor() { }

  ngOnInit(): void {
  }

getGreetingMessage(event)// mehtod which open alert based on button click event
{
  alert(this.message);
}
}
