import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsers } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',

})
export class SigninComponent {
  formUser = this.form.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    }

  )
  users!: IUsers[]
  constructor(
    private userService: UsersService,
    private form: FormBuilder
  ) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (err: any) => {
        this.users = err.users
      }
    })

  }

  async onhandlerSubmit() {

    if (this.formUser.invalid) {
      console.log("sai");
      return;

    };

    const userA = this.users?.find(user => user.email === this.formUser.value.email)

    if (!userA) {
      alert("User already exists!")
      return;
    }
    this.userService.signIn(this.formUser.value as IUsers).subscribe({
      next: (result) => {
        localStorage.setItem("userInfo", JSON.stringify(result));

        alert("Sign In Success!")
      }

    });
  }
}
