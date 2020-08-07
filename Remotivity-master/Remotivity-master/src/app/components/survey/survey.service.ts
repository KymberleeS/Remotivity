import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  rating: any;
  rating2: any;
  rating3: any;

  // where data will be posted
  url = '';
  constructor(private http: HttpClient) { }

  survey(userData) {
    return this.http.post<any>(this.url, userData);
  }
}
