import { Component } from '@angular/core';
import { Employee } from 'employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // marks:number = 100;
  // // mycolor:string="";
  // myclass:string="";

  // constructor(){
  //   if(this.marks>=35){
  //     this.myclass="class1";
  //   }
  //   else{
  //     this.myclass="class2";
  //   }
  // }

  employees:Employee[] = [
    new Employee(101,"John",5000),
    new Employee(102,"Smith",6000),
    new Employee(103,"Nick",8000)
  ];

}
