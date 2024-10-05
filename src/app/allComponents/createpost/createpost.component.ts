import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../sheard/servises/posts/posts.service';
import { Router } from '@angular/router';
import { UsersService } from '../../sheard/servises/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-createpost',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './createpost.component.html',
  styleUrl: './createpost.component.scss'
})
export class CreatepostComponent {

  private readonly _Router = inject(Router)
  private readonly _UsersService = inject(UsersService)
  private readonly _PostsService = inject(PostsService)

  _Subscription !: Subscription
  isloding: boolean = false
  contintPost: string = ""
  imgvalue: File | null = null
  Iduserposts: any = ''

  // =======>>  coll api for git id to unable do any action 
  ngOnInit(): void {
    this.Iduserposts = this._UsersService.userToken;
    this._UsersService.JWT();
  }


  imgName(imgname: Event) {
    let inputImg = imgname.target as HTMLInputElement
    if (inputImg.files && inputImg.files.length > 0) {
      this.imgvalue = inputImg.files[0]
      console.log(inputImg.files[0]);
    }
  }

  sendPostData() {
    this.isloding = true
    let _formData: any = new FormData()
    if (this.contintPost) {
      _formData.append('body', this.contintPost);
      _formData.append('image', this.imgvalue!)
      this._Subscription = this._PostsService.createPost(_formData).subscribe({
        next: (res) => {
          if (res.message == "success") {
            this._Router.navigate(['/home']); this.isloding = false
          }
        }
      })
    }
  }


  Cancel() {
    this._Router.navigate(['/home'])
  }


  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }


}
