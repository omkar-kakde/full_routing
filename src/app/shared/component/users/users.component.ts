import { Component, OnInit } from '@angular/core';
import { Iusers } from '../../models/users';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  usersData ! : Array<Iusers>;
  constructor(private  _service : UsersService) { }

  ngOnInit(): void {
    this.usersData = this._service.getAllSerivce()
  }

 
 
}
