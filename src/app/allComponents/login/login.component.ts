import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../sheard/servises/users/users.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isloding: boolean = false;
  errorMessage: string = "";

  private readonly _Router = inject(Router)
  private readonly _UsersService = inject(UsersService);
  private readonly _FormBuilder = inject(FormBuilder);


  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
  })



  loginBtn() {

    this.isloding = true
    this._UsersService.singIn(this.loginForm.value).subscribe({
      next: (res) => {
        if (typeof localStorage != "undefined") {
          localStorage.setItem("userTokenSocial", res.token)
          this._UsersService.JWT()
          
          this._Router.navigate(["/home"])
          this.isloding = false


        }

      }, error: (err) => {
        this.errorMessage = err.error.error
        this.isloding = false
      }
    })
  }


}
