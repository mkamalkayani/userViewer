import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users = [];
  @Output() selectedUser = new EventEmitter();

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(data => this.users = data);
  }

  sendSelectedUser(user: User) {
    this.selectedUser.emit(user);
  }

}
