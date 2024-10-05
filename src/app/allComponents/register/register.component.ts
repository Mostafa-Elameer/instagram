import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../sheard/servises/users/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  errorMessage: string = ""
  isloding: boolean = false
  private readonly _Router = inject(Router)
  private readonly _UsersService = inject(UsersService)
  private readonly _FormBuilder = inject(FormBuilder)

  registerForm: FormGroup = this._FormBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email]],
    gender: [null, [Validators.required]],
    password: [null, [Validators.required, Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
    rePassword: [null, [Validators.required]],
    dateOfBirth: [null, [Validators.required]],
  }, { validators: this.confirmPassword })

  confirmPassword(key: AbstractControl) {
    if (key.get("password")?.value == key.get("rePassword")?.value) return null
    else return { "pathMatch": true }

  }




  registerBtn() {
    this.isloding = true
    console.log("nnnn");

    this._UsersService.singUp(this.registerForm.value).subscribe({
      next: (res) => {
        console.log(res);
        if (res.message) {
          this._Router.navigate(["/login"])
        }

        this.isloding = false
      }, error: (err) => {
        this.errorMessage = err.error.error
        this.isloding = false
      }
    })
  }

}
