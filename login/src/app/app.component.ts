import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  userName:string="";
  pzwd:string="";
  msg:string="";

  constructor(@Inject(LoginService) private loginService:LoginService){
    
  }

  loginCheck(){
    if(this.loginService.checkUnameAndPwd(this.userName,this.pzwd)==true){
      this.msg="Login Success";
    }
    else{
      this.msg="login failed check your creds.."
      
    }
  }
}
