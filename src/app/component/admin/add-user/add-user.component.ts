import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUsers } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',

})
export class AddUserComponent {
  users!: IUsers[]
  formUser = this.form.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
    role: ['']
  })
  constructor(
    private form: FormBuilder,
    private userService: UsersService
  ) {
    this.userService.getAllUsers().subscribe({
      next: (err: any) => { this.users = err.users }
    })
  }
  async onhandlerSubmit() {
    try {
      if (this.formUser.invalid) return;
      try {

        const userA = this.users?.find(user => user.email === this.formUser.value.email)
        if (userA) {
          alert("User already exists!")
          return;
        } else {
          this.userService.AddUser(this.formUser.value as IUsers).subscribe(data => {
            console.log(data);
          });
          alert("Sign Up Success!")
        }

      } catch (error: any) {
        console.log(error.message);

      }

    } catch (error: any) {
      console.log(error.message);

    }
  }
}
