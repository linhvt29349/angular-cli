import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUsers } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',

})
export class SignupComponent {
  formUser = this.form.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.checkPasswords }

  )
  users!: IUsers[]
  constructor(
    private userService: UsersService,
    private form: FormBuilder,
    private navigated: Router
  ) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe({
      next: (err: any) => { this.users = err._doc }
    })

  }
  checkPasswords(fg: FormGroup) {
    const password = fg.get('password')?.value;
    const passwordConfirm = fg.get("confirmPassword")?.value;
    if (password === passwordConfirm) {
      return true;
    } else {
      return { passwordNotMatch: true }
    }
  }
  async onhandlerSubmit() {
    if (this.formUser.invalid) return;
    try {

      const userA = this.users?.find(user => user.email === this.formUser.value.email)
      if (userA) {
        alert("User already exists!")
        return;
      }

      this.userService.signUp(this.formUser.value as IUsers).subscribe(data => {
        console.log(data);
      });
      alert("Sign Up Success!")
      this.navigated.navigate(['/'])

    } catch (error: any) {
      console.log(error.message);

    }
  }
}
