import { Component, inject } from '@angular/core';
import { NavpagelgComponent } from "../navpagelg/navpagelg.component";
import { OnePostComponent } from "../one-post/one-post.component";
import { PostsService } from '../../sheard/servises/posts/posts.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ipost } from '../../sheard/interfaces/Ipost';
import { PostcommentsComponent } from "../postcomments/postcomments.component";
import { CreatecommentComponent } from "../createcomment/createcomment.component";
import { CreatepostComponent } from "../createpost/createpost.component";
import { Subscription } from 'rxjs';
import { UsersService } from '../../sheard/servises/users/users.service';
import { iuserData } from '../../sheard/interfaces/userData';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink, NavpagelgComponent, OnePostComponent, PostcommentsComponent, CreatecommentComponent, CreatepostComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  private readonly _Router = inject(Router)
  private readonly _UsersService = inject(UsersService)
  private readonly _PostsService = inject(PostsService)
  private readonly _ActivatedRoute = inject(ActivatedRoute)

  _Subscription !: Subscription
  myposts: Ipost[] = []
  _userData !: iuserData
  imgvalue: File | null = null

  Iduserposts: string = ''

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe((p) => {
      this.Iduserposts = (p.get("iduser")!);

      this._Subscription = this._UsersService.getLoggedUserData().subscribe({
        next: (res) => {
          this._userData = res.user
          console.log(this._userData);

        }
      })


      this._Subscription = this._PostsService.getUserPost(this.Iduserposts!).subscribe({
        next: (res) => {
          this.myposts = res.posts
        }
      })
    })
  }

  Deletpost(idpostDelet: string) {
    console.log(idpostDelet);
    this._Subscription = this._PostsService.deletePost(idpostDelet).subscribe({
      next: (res) => {
        if (res.message = ("success")) {
          this._Subscription = this._PostsService.getUserPost(this.Iduserposts).subscribe({
            next: (res) => {
              this.myposts = res.posts
            }
          })
        }
      }
    })
  }

  update(id: string) {
    this._Router.navigate(['/updatepost', id])
  }

  imgName(imgname: Event) {
    let inputImg = imgname.target as HTMLInputElement
    if (inputImg.files && inputImg.files.length > 0) {
      this.imgvalue = inputImg.files[0]
      console.log(inputImg.files[0]);
    }
  }

  sendPostData() {
    let _formData: any = new FormData()
    if (this.imgvalue) {
      _formData.append('photo', this.imgvalue!)
      this._Subscription = this._UsersService.uploadProfilePhoto(_formData).subscribe({
        next: (res) => {
          console.log(res);

        }
      })
    }
  }


  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }

}
