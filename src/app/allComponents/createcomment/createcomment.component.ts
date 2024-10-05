import { FormGroup, ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { Component, inject, Input } from '@angular/core';
import { CommentsService } from '../../sheard/servises/comments/comments.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-createcomment',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './createcomment.component.html',
  styleUrl: './createcomment.component.scss'
})
export class CreatecommentComponent {


  private readonly _CommentsService = inject(CommentsService)
  _Subscription !: Subscription
  @Input() postid: string = ''
  contintComment: string = ''
  iscrated: boolean = false

  sendDataComment() {
    this.iscrated = true
    let _formData: any | string = new FormData()
    _formData.append("content", this.contintComment!);
    _formData.append("post", this.postid!)

    let data: {} = {
      "content": _formData.get("content"),
      "post": _formData.get("post")
    }

    // =======>>  coll api for creatComments
    this._Subscription = this._CommentsService.creatComments(data).subscribe({
      next: (res: any) => {
        this.contintComment = ''
        this.iscrated = false
      }
    })
  }

  ngOnDestroy(): void {
    this._Subscription?.unsubscribe()
  }



}
