import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class YelpSearchService {


  constructor(private http: HttpClient) { }

  getSearches(city, state, price): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/yelp/${city}/${state}/${price}`);

  }
}
