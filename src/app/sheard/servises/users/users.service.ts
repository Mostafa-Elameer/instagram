import { HttpClient } from '@angular/common/http';
import { inject, Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { baseAPI } from '../../environment/baseAPI';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  userToken: WritableSignal<any> = signal(null)

  private readonly _Router = inject(Router)
  private readonly _HttpClient = inject(HttpClient)

  // ==========>>> SIGNUP API 
  singUp(Data: string): Observable<any> {
    return this._HttpClient.post(`${baseAPI.baseAPI}users/signup`, Data)
  }

  // ==========>>> SIGNIN API 
  singIn(Data: object): Observable<any> {
    return this._HttpClient.post(`${baseAPI.baseAPI}users/signin`, Data)
  }

  // ==========>>> CHANGE PASSWORD API 
  changePassword(Data: string): Observable<any> {
    return this._HttpClient.patch(`${baseAPI.baseAPI}users/change-password`, Data)
  }

  // ==========>>> UPLOAD PROFILE PHOTO 
  uploadProfilePhoto(Data: string): Observable<any> {
    return this._HttpClient.put(`${baseAPI.baseAPI}users/upload-photo`, Data)
  }

  // ==========>>> GET LOGGED USER DATA 
  getLoggedUserData(): Observable<any> {
    return this._HttpClient.get(`${baseAPI.baseAPI}users/profile-data`)
  }


  // ==========>>> De Code Token 

  JWT(): void {
    if (typeof localStorage !== "undefined") {
      if (localStorage.getItem("userTokenSocial") != null) {
        this.userToken = jwtDecode(localStorage.getItem("userTokenSocial")!)
      }
    }
  }


  logout() {
    if (typeof localStorage !== "undefined") {
      localStorage.removeItem("userTokenSocial")
      this.userToken

      this._Router.navigate(["/login"])
    }
  }
}
