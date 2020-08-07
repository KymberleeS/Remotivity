import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  // where data will be posted
  url = '';
  constructor(private http: HttpClient) { }

  
  register(userData) {
    return this.http.post<any>(this.url, userData);
  }
}
