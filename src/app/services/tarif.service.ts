import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarif } from '../model/tarif';

@Injectable({
  providedIn: 'root'
})
export class TarifService {

  private baseUrl = "http://localhost:8080/api";
  constructor(private http : HttpClient) { }

  getTarifList():Observable<Tarif[]> {
    return this.http.get<Tarif[]>(`${this.baseUrl}/tarifs`);
  }

  createTarif(tarif:Tarif): Observable<Tarif>
  {
    return this.http.post<Tarif>(`${this.baseUrl}/tarif`,tarif);
  }

  getTarifById(id: number): Observable<Tarif>{
    return this.http.get<Tarif>(`${this.baseUrl}/tarif/${id}`);
  }

  
}
