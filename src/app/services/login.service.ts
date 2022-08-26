import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = false;
  roleAs:string|null = '';

  private baseUrl = 'http://localhost:8080/login'
  authenticated = false;
  constructor(private httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*'
    })
  }
  login(credentials:any) {
    const cred = "username="+credentials.username+"&password="+credentials.password;
    return this.httpClient.post(`${this.baseUrl}`,cred,this.httpOptions)
  }
  login2(value:string)
  {
    this.isLogin = true;
    this.roleAs = value;
    localStorage.setItem('STATE','true');
    localStorage.setItem('ROLE', this.roleAs);
    return of({success:this.isLogin,role:this.roleAs});
  }

  /**register(user:Utilisateur)
  {
    return this.httpClient.post(`${this.baseUrl}/
  }*/

  logout() {
    this.isLogin = false;
    this.roleAs = '';
    localStorage.setItem('STATE','false');
    localStorage.setItem('ROLE','');
    return of({success:this.isLogin,role:''});
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('STATE');
    if(loggedIn == 'true') {
      this.isLogin = true;}
    else{
      this.isLogin = false;
    }
    return this.isLogin;
  }

  getRole()
  {
    this.roleAs = localStorage.getItem('ROLE');
    return this.roleAs;
  }
}
