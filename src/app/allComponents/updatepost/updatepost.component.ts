import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostsService } from '../../sheard/servises/posts/posts.service';
import { Ipost } from '../../sheard/interfaces/Ipost';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../sheard/servises/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-updatepost',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './updatepost.component.html',
  styleUrl: './updatepost.component.scss'
})
export class UpdatepostComponent {

  _Subscription !: Subscription
  Iduserposts: any = ''
  isloding: boolean = false
  contintPost: string = ""
  imgvalue: File | null = null
  idPostUpdate: string = ''
  postUpdate: Ipost[] = []
  body: string = ''

  private readonly _Router = inject(Router)
  private readonly _ActivatedRoute = inject(ActivatedRoute)
  private readonly _PostsService = inject(PostsService)
  private readonly _UsersService = inject(UsersService)


  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((p) => {
      this.idPostUpdate = (p.get('id')!)
      this.Iduserposts = this._UsersService.userToken
      this._UsersService.JWT()

      this._Subscription = this._PostsService.getSinglePost(this.idPostUpdate).subscribe({
        next: (res) => {
          this.postUpdate = res.post
          this.body = res.post.body
        }
      })
    })
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

      this._Subscription = this._PostsService.updatePost(this.idPostUpdate, _formData).subscribe({
        next: (res) => {
          if (res.message == "success") {
            this.isloding = false
            this._Router.navigate(['/Profile', this.Iduserposts.user])
          }
        }
      })
    }
  }

  Cancel() {
    this._Router.navigate(['/Profile', this.Iduserposts.user])
  }


  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }


}
