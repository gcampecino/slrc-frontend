import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user: User = {
    id: 1,
    fname: 'Windstorm'
  };
  users = USERS;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    // this.userService.getUsers().subscribe(response => {
    //   this.users = response.users;
    //   console.log(this.users);
    // });;
  }

}
