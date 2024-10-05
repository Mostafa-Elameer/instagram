import { Injectable } from '@angular/core';
import { baseAPI } from '../../environment/baseAPI';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _HttpClient: HttpClient) { }

  // ========== >>> CREAT COMMENTS 
  creatComments(Data: object): Observable<any> {
    return this._HttpClient.post(`${baseAPI.baseAPI}comments`, Data)
  }

  // ========== >>> GET POST COMMENTS 
  getPostComment(id: string): Observable<any> {
    return this._HttpClient.get(`${baseAPI.baseAPI}posts/${id}/comments`)
  }

  // ========== >>> UPDATE COMMENTS 
  UpdateComment(commentid: string, Comment: string): Observable<any> {
    return this._HttpClient.put(`${baseAPI.baseAPI}comments/${commentid}`, Comment)
  }

  // ========== >>> delet COMMENTS 
  deleteComment(commentId: string): Observable<any> {
    return this._HttpClient.delete(`${baseAPI.baseAPI}comments/${commentId}`)
  }

}
