import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
}
