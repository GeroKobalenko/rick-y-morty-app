import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  
  constructor(private http: HttpClient) {}

  public getCaracteres(params: any) {
    let url = environment.baseUrl + 'character/';
    return this.http.get(url, { params });
  }

  public getCaracterById(id: string) {
    let url = environment.baseUrl + 'character/' + id;
    return this.http.get(url);
  }

  public getByUrl(url: string){
    return this.http.get(url);
  }
}
