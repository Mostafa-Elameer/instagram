import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseAPI } from '../../environment/baseAPI';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {



  constructor(private _HttpClient: HttpClient) { }
  // =========== >>> CREAT POST  
  createPost(Data: string): Observable<any> {
    return this._HttpClient.post(`${baseAPI.baseAPI}posts`, Data)
  }
  // =========== >>> GET ALL POSTS 
  getAllPost(numpage: number): Observable<any> {
    return this._HttpClient.get(`${baseAPI.baseAPI}posts?limit=50&page=${numpage}`)
  }

  // =========== >>> GET ALL POSTS 
  getUserPost(ID: string): Observable<any> {
    return this._HttpClient.get(`${baseAPI.baseAPI}users/${ID}/posts?limit=2`)
  }

  // =========== >>> GET ALL POSTS 
  getSinglePost(ID: string): Observable<any> {
    return this._HttpClient.get(`${baseAPI.baseAPI}posts/${ID}`)
  }

  // =========== >>> UPDATE POST 
  updatePost(ID: string, DATA: string): Observable<any> {
    return this._HttpClient.put(`${baseAPI.baseAPI}posts/${ID}`, DATA)
  }

  // =========== >>> DELETE POST 
  deletePost(ID: string): Observable<any> {
    return this._HttpClient.delete(`${baseAPI.baseAPI}posts/${ID}`)
  }





}
