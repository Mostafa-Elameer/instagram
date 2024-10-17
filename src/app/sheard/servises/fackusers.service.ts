import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as _stories from './../../../assets/localData/stores.json'

@Injectable({
  providedIn: 'root'
})
export class FackusersService {

  storiesApi = _stories

  private readonly _HttpClient = inject(HttpClient)
  gitStories(): Observable<any> {
    return this._HttpClient.get('./../../../assets/localData/stores.json')
  }
}
