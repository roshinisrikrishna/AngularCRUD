import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent {
  users: any | undefined;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
  deleteUser(id: number) {
    this.userService.deleteUserById(id).subscribe((data) => {
      console.log(data);
      this.ngOnInit(); //REFRESH IT
    });
  }
}
