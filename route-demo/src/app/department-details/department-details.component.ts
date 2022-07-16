import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

public departmentId:number=0;

  constructor(private route:ActivatedRoute,private router:Router) {

      
   }

  ngOnInit(): void {
    //this.departmentId = this.route.snapshot.paramMap.get('id');
    
    this.route.params.subscribe(params =>{
      this.departmentId = parseInt(params["id"]);
    });
  
  }

  goPrevious(){
    let previousId = this.departmentId - 1;
    this.router.navigate(['/department',previousId])
  }

  goNext(){
    let nextId = this.departmentId + 1 ;
    this.router.navigate(['/department',nextId])
  }
}
