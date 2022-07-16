import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fname:string = "Adam";
  lname:string = "Smith";
  age:number = 25;
  gender:string = "male";
  country:string = "India";
  isEmployed:boolean = true;

  handleSubmitBtn(){
    this.fname="Mohammad";
    this.lname="Sharif";
    this.age=30;
    this.gender="male";
    this.country="USA";
    this.isEmployed=false;
  }
}
