import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Zones } from '../model/zones';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  private baseUrl = "http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  getZoneList():Observable<Zones[]> {
    return this.http.get<Zones[]>(`${this.baseUrl}/zones`);
  }

  createZones(zone:Zones): Observable<Zones>
  {
    return this.http.post<Zones>(`${this.baseUrl}/zone`,zone);
  }

  getZoneById(id: number): Observable<Zones>{
    return this.http.get<Zones>(`${this.baseUrl}/zone/${id}`);
  }





}
