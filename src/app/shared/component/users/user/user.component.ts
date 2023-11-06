import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iusers } from 'src/app/shared/models/users';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId ! : number;
  userObj ! : Iusers;
  constructor(private _router: Router,private _rout : ActivatedRoute , private _service : UsersService) { }

  ngOnInit(): void {
     console.log(this._rout.snapshot);
        //  this.userId = +this._rout.snapshot.params['userId']
        //    this.userObj = this._service.getUser(this.userId)!;
     this._rout.params
            .subscribe(res=>{
              console.log(res);
              this.userId =  +res['userId']
              this.userObj = this._service.getUser(this.userId)!;
            })
      console.log(this.userObj);
      
      
  }
  
  gotoEdit(){
    this._router.navigate(['users',this.userId,'edit'],{
      queryParamsHandling : 'preserve'
    })

  }
 

}
