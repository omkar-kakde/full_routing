import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {
  editeduser ! : Iusers;
  userId ! : number;
  qp ! : string;
  constructor(private _activatedroute : ActivatedRoute,
              private _router : Router,
              private _userservice : UsersService) { }

  ngOnInit(): void {

    this._activatedroute.params
                .subscribe((id:Params)=>{
                  this.userId = +id['userId']
                })

  this.editeduser =  this._userservice.getUser(this.userId)!
            

      this._activatedroute.queryParams
                          .subscribe((qp:Params)=>{
                            this.qp = qp['canEdit']
                          })

  }

  updateuser(username:HTMLInputElement, userid : HTMLInputElement){

    let obj : Iusers = {
      username : username.value,
      id : this.userId,
      userRole : this.editeduser.userRole
    }

    this._userservice.updateuser(obj)
      this._router.navigate(['/users'])
 
  }

};
