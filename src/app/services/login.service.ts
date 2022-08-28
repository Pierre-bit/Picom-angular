import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin = false;
  roleAs:string|null = '';

  private baseUrl = 'http://localhost:8080'
  authenticated = false;
  constructor(private httpClient:HttpClient, private router:Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      /*'Content-Type': 'application/json',*/
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',

    })
  }
  login(credentials:any) {
  const httpOptionsLogin = {
      headers: new HttpHeaders({
        /*'Content-Type': 'application/json',*/
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin' : '*',
        'authorization':btoa(credentials.username+':'+credentials.password)  
      })
    }
    //const cred = "username="+credentials.username+"&password="+credentials.password;
    return this.httpClient.post(`${this.baseUrl}/login`,"username="+credentials.username+"&password="+credentials.password
    ,httpOptionsLogin)
  }
  

  register(user:Utilisateur):Observable<any>
  {
    return this.httpClient.post(`${this.baseUrl}/api/client`,user,this.httpOptions);
  }

  logout() {
    sessionStorage.removeItem('user');
    window.location.reload();
    this.isLogin = false;
  }

  /*isLoggedIn() {
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
  }*/
}
