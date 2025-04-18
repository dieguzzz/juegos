import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://www.freetogame.com/api/games';

  constructor(private http: HttpClient) { }

  public getGames(): Observable<any> {
    return this.http.get<any>(this.url);
  }
}
