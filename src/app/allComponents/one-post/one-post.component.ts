import { Component, inject, Input, ViewChild, viewChild, viewChildren } from '@angular/core';
import { Ipost } from '../../sheard/interfaces/Ipost';
import { PostsService } from '../../sheard/servises/posts/posts.service';
import { PostcommentsComponent } from "../postcomments/postcomments.component";
import { DatePipe } from '@angular/common';
import { CreatecommentComponent } from "../createcomment/createcomment.component";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-one-post',
  standalone: true,
  imports: [PostcommentsComponent, DatePipe, CreatecommentComponent],
  templateUrl: './one-post.component.html',
  styleUrl: './one-post.component.scss'
})
export class OnePostComponent {

  _Subscription !: Subscription
  view: boolean = false
  isRef: boolean = false
  _curntpage: number = 16
  _post!: Ipost[]

  private readonly _PostsService = inject(PostsService)
  ngOnInit(): void {
    this._Subscription = this._PostsService.getAllPost(this._curntpage).subscribe({
      next: (res) => {
        this._curntpage = res.paginationInfo.currentPage
        this._post = res.posts;
      }
    })
  }


  nextpage(num: number) {
    this.isRef = true
    this._curntpage = num;
    this._PostsService.getAllPost(this._curntpage).subscribe({
      next: (res) => {
        this._curntpage = res.paginationInfo.currentPage
        this._post = res.posts;
        this.isRef = false
      }
    })
  }

  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }


}
