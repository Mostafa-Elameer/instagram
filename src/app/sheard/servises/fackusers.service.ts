import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FackusersService {


  private readonly _HttpClient = inject(HttpClient)
  gitStories(): Observable<any> {
    return this._HttpClient.get("https://dummyjson.com/c/eee7-d373-430d-bbe8")
  }
}
