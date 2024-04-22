import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '../component/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class HttpConnectionService {
  API_URL = 'http://localhost:8000/'
  constructor(private httpClient: HttpClient) { }
  startLogin(){
    this.httpClient.post(`${this.API_URL}/login`, "" , )
  }

  getUsername(){
    this.httpClient.get(`${this.API_URL}/`)
  }
}
