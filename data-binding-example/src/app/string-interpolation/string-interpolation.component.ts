import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent  {

  userName:string="Coding With Amit";
 

  getDate()//method call used with StringInterpolation
  {

    return new Date();
  }

}
