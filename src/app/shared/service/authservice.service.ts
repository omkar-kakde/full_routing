import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ResolveEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
loginstatus : boolean = true;
  constructor(private _rout : Router ,
    private _snackBar: MatSnackBar) { }


  userlogin(): Promise<boolean>{
    return new Promise<boolean>((resolve,reject)=>{
        resolve(this.loginstatus)
    })
  }


  logintoapp(email:string,password:string){
    if(email==="omkar123" && password==="om1"){
      this.loginstatus = true;
      localStorage.setItem('userRole','ADMIN')
      localStorage.setItem("token", "JWT ADMIN")
      this._rout.navigate(['home'])
    }else{
      this._snackBar.open("plz enter correct credentials!!" , "Udno", {
       duration :3000,
       verticalPosition:'top',
      
      
      }
      )
      
    }
   
    //username password
  }


  logoutfromapp(){
    this.loginstatus = false;
    localStorage.clear()
  }
}
