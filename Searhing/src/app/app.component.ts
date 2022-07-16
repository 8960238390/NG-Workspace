import { Component } from '@angular/core';
import { Employee } from 'src/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employees:Employee[] = [
    new Employee(101,"John",5000),
    new Employee(102,"Smith",6000),
    new Employee(103,"Kevin",4000),
    new Employee(104,"Nick",8000),
    new Employee(105,"Charles",30000)
  ];

  employeesTemp:Employee[] = [];

  constructor(){
    this.employeesTemp=this.employees;
  }

  str:string = "";

  onSearchClick(){
    console.log(this.employees);
    console.log(this.employeesTemp);

    this.employeesTemp = this.employees.filter( emp => {
      return emp.empName.toLowerCase().indexOf(this.str.toLowerCase()) >= 0;
    });
  }
}
