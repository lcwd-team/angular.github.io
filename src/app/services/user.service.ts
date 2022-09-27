import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }

  //create new user
  createUser(user: any) {
    return this.httpClient.post(`${environment.baseUrl}/users/`, user)
  }

  //login request
  generateToken(loginData: any) {
    return this.httpClient.post(`${environment.baseUrl}/auth/login`, loginData)
  }
}
