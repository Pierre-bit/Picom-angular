import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Annonce } from '../model/annonce';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private baseUrl = "http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  getAnnonceList():Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.baseUrl}/annonces`);
  }

  createAnnonce(annonce:Annonce): Observable<Annonce>
  {
    return this.http.post<Annonce>(`${this.baseUrl}/annonce`,annonce);
  }

  getAnnonceById(id: number): Observable<Annonce>{
    return this.http.get<Annonce>(`${this.baseUrl}/annonce/${id}`);
  }
}

/*logout() {
  sessionStorage.removeItem('currentUser');
  window.location.reload();
}*/


