import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usernotfound',
  templateUrl: './usernotfound.component.html',
  styleUrls: ['./usernotfound.component.scss']
})
export class UsernotfoundComponent implements OnInit {
  userdata ! :string;
  constructor(private _Activateroute : ActivatedRoute) { }

  ngOnInit(): void {
  this.userdata = this._Activateroute.snapshot.data['errorms']
 
  console.log(this.userdata);
  
  }

  
}
