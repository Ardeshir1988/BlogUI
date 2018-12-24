import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Post} from '../post';
import { AppSettings } from '../AppSettings';
@Injectable({
  providedIn: 'root'
})
export class PostdetailService {
  private postDetailUrl = AppSettings.Blog_POST+'/findbyid?id='; 
  getPostDetail(postid:string): Observable<Post>{
    console.log(this.postDetailUrl+postid);
    return this.http.get<Post>(this.postDetailUrl+postid);
  }
  constructor(private http :HttpClient) { }
}
