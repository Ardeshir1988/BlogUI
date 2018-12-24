import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Token} from '../token';
import { User } from '../user';
import { AppSettings } from '../AppSettings';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  getToken(user:User): Observable<Token>{
    return this.http.post<Token>(AppSettings.Blog_LOGIN,user);
  }
  constructor(private http :HttpClient) { }
}