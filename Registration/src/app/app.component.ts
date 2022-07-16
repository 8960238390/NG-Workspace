import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName:string = "";
  pzd:string = "";
  confrimPzd:string="";
  gender:string = "";
  country:string = "";
  licenceAgreement:boolean = false;

  msg:string ="";

  register(){
    this.msg=`UserName : `+this.userName+ 
              `<br/>Password : `+this.pzd+
              `<br/>confrimPassword`+this.confrimPzd+
              `<br/>gender : `+this.gender+
              `<br/>country : `+this.country+
              `<br/>licenceAgreement : `+this.licenceAgreement;
  }
}
