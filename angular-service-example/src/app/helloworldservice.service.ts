import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloworldserviceService {

   getMessage() {
   return "Hello Coding with Amit";
  } 
  constructor() { }
}
