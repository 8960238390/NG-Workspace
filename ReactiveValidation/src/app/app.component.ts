import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // Template Validation
  // submit(form:any){
    
   // let firstName = form.firstName;
    //console.log(firstName);

    // let lastName = form.lastName;
    // console.log(lastName);

    // let comment = form.comment;
    // console.log(comment);

  //}


  // Reactive form
  form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3), Validators.maxLength(10)])
  });

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form.value)
  }

}
