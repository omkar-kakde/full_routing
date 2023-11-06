import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from '../../service/authservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  

  constructor(private _router :Router,
              private _authservice : AuthserviceService,
              private _snackBar: MatSnackBar
              ) { }

  ngOnInit(): void {
  }

  login(email: HTMLInputElement , password : HTMLInputElement){
    this._authservice.logintoapp(email.value, password.value)
   
  }
  openSnackBar() {
    
  }

}
