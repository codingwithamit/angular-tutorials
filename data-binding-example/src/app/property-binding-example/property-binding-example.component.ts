import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding-example',
  templateUrl: './property-binding-example.component.html',
  styleUrls: ['./property-binding-example.component.css']
})
export class PropertyBindingExampleComponent implements OnInit {
userName:string="Coding With Amit";//variable for property binding.
url:string="http://www.codingwithamit.com";//variable for property binding.
  constructor() { }

  ngOnInit(): void {
  }

}
