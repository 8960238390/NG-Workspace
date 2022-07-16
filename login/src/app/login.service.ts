import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:User[] = [
    new User("john","john123"),
    new User("smith","smith123")
  ];
  constructor() { }

  
  checkUnameAndPwd(userName:string, pzwd:string):boolean{
    
    let count=0;

    for(let i=0 ; i<=this.users.length-1 ; i++){
      
      if(this.users[i].userName == userName && this.users[i].pzwd == pzwd){
        count++;
        break;
      }//if

    }//for

    if(count == 1){
      return true;
    }
    else{
      return false;
    }
  }
}
