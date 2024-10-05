import { Component, inject, Input } from '@angular/core';
import { CommentsService } from '../../sheard/servises/comments/comments.service';
import { IpostComments } from '../../sheard/interfaces/Ipostcomments';
import { DatePipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-postcomments',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './postcomments.component.html',
  styleUrl: './postcomments.component.scss'
})
export class PostcommentsComponent {


  clickbtn: boolean = false
  _Subscription !: Subscription
  _allpostComments: IpostComments[] = []
  @Input() idPostComments: string = ""
  private readonly _CommentsService = inject(CommentsService)

  ngOnChanges(): void {
    this.clickbtn = true
    this._Subscription = this._CommentsService.getPostComment(this.idPostComments).subscribe({
      next: (res) => {
        this._allpostComments = res.comments
        this.clickbtn = false
      }
    })
  }

  DeletComment(commentId: string) {
    console.log(commentId);
    this._Subscription = this._CommentsService.deleteComment(commentId).subscribe({
      next: (res) => {
        if (res.message == "success") {
          this._allpostComments = res.comments
        }
      }
    })
  }


  updateComment(commentId: string) {
    console.log(commentId);
  }


  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }


}
