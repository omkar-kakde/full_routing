import { Injectable } from '@angular/core';
import { Iusers } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  userArray = [
    {username: "jhon",
     id : 1,
     userRole : 'Admin',
     },
     {username: "july",
     id : 2,
     userRole : 'User'
     },
     {username: "may",
     id : 3,
     userRole : 'User'
     }
  ]

  getAllSerivce(){
    return this.userArray;
  }

  getUser(id:number){
      return this.userArray.find(user => user.id === id)
  }

  updateuser(userobj:Iusers){
    this.userArray.forEach((user)=>{
        if(user.id === userobj.id){
            user.username = userobj.username
        }
    })
  }

}
