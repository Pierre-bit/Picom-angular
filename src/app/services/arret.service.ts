import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arret } from '../model/arret';

@Injectable({
  providedIn: 'root'
})
export class ArretService {

  private baseUrl = "http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  getArretList():Observable<Arret[]> {
    return this.http.get<Arret[]>(`${this.baseUrl}/arrets`);
  }

  createArret(arret:Arret): Observable<Arret>
  {
    return this.http.post<Arret>(`${this.baseUrl}/arret`,arret);
  }

  getArretById(id: number): Observable<Arret>{
    return this.http.get<Arret>(`${this.baseUrl}/arret/${id}`);
  }
}
