import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrancheHoraire } from '../model/tranche-horaire';

@Injectable({
  providedIn: 'root'
})
export class TrancheHoraireService {

  private baseUrl = "http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  getTrancheHoraireList():Observable<TrancheHoraire[]> {
    return this.http.get<TrancheHoraire[]>(`${this.baseUrl}/trancheHs`);
  }

  createTrancheHoraire(trancheHoraire:TrancheHoraire): Observable<TrancheHoraire>
  {
    return this.http.post<TrancheHoraire>(`${this.baseUrl}/trancheH`,trancheHoraire);
  }

  getTrancheHoraireById(id: number): Observable<TrancheHoraire>{
    return this.http.get<TrancheHoraire>(`${this.baseUrl}/trancheH/${id}`);
  }
}
