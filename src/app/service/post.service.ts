import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Post} from '../post';
import { AppSettings } from '../AppSettings';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(AppSettings.Blog_POST);
  }
  getPostsByTagName(tagName:string):Observable<Post[]>{
    return this.http.get<Post[]>(AppSettings.Blog_POST+'/findallbytag?tagname='+tagName);
  }
  searchPostByKeword(keyword:string):Observable<Post[]>
  {
    return this.http.get<Post[]>(AppSettings.Blog_POST+'/findbykeyword?keyword='+keyword);
  }

  constructor(private http :HttpClient) { }
}
