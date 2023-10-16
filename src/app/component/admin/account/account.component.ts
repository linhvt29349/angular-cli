import { Component } from '@angular/core';
import { IUsers } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',

})
export class AccountComponent {
  users!: IUsers[];
  constructor(private userService: UsersService) {
    this.userService.getAllUsers().subscribe({
      next: (result: any) => { this.users = result.users }
    })
  }
  RemoveUser(id: any) {
    if (confirm('Are you sure you want to user delete?') === true) {
      this.userService.DeleteUser(id).subscribe(() => {
        this.users = this.users.filter(user => user._id != id)
      })
    } else {
      return;
    }
  }

}
