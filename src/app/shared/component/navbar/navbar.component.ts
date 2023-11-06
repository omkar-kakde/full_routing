import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../service/authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _authservice: AuthserviceService,
    private _router:Router) { }

  ngOnInit(): void {
  }

  // onsignin(){
  //   this._authservice.logintoapp();
  // }

  onsignout(){
    this._authservice.logoutfromapp();
    this._router.navigate(['/'])
  }
}
