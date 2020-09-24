import { Component, OnInit } from '@angular/core';
import {HelloworldserviceService} from './/helloworldservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HelloworldserviceService]
})

export class AppComponent implements OnInit {
  title = 'angular-service-example';
  message:string;
  constructor (private helloworldService:HelloworldserviceService ){}

  ngOnInit()
  {
    this.message=this.helloworldService.getMessage();
  }


}
