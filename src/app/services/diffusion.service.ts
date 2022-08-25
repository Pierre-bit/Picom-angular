import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diffusion } from '../model/diffusion';

@Injectable({
  providedIn: 'root'
})
export class DiffusionService {

  private baseUrl = "http://localhost:8080/api";
  constructor(private http:HttpClient) { }

  getDiffusionList():Observable<Diffusion[]> {
    return this.http.get<Diffusion[]>(`${this.baseUrl}/diffusions`);
  }

  createDiffusion(diffusion:Diffusion): Observable<Diffusion>
  {
    return this.http.post<Diffusion>(`${this.baseUrl}/diffusion`,diffusion);
  }

  getDiffusionById(id: number): Observable<Diffusion>{
    return this.http.get<Diffusion>(`${this.baseUrl}/diffusion/${id}`);
  }
}
