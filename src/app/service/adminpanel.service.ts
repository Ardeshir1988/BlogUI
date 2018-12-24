import { Injectable } from '@angular/core';
import { Statistic } from '../statistic';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServiceResponse } from '../serviceresponse';
import { Post } from '../post';
import { AppSettings } from '../AppSettings';
import { Tag } from '../tag';
import { Category } from '../category';


@Injectable({
  providedIn: 'root'
})
export class AdminpanelService {

  getStatistic(): Observable<Statistic>{
    return this.http.get<Statistic>(AppSettings.Blog_ADMIN_PANEL+'/statistics');
  }
  uploadImage(file:any):Observable<ServiceResponse>{
    const uploadData = new FormData();
    uploadData.append('file',file, file.name);
    return this.http.post<any>(AppSettings.Blog_ADMIN_PANEL+'/uploadfile',uploadData);
  }
  getAllPost():Observable<Post[]>{
    return this.http.get<Post[]>(AppSettings.Blog_ADMIN_PANEL+'/post');
  }
  deletePost(postid:string):Observable<ServiceResponse> {
    return this.http.delete<ServiceResponse>(AppSettings.Blog_ADMIN_PANEL+'/post?postid='+postid);
  }
  sendNewPost(post:Post):Observable<ServiceResponse>{
    return this.http.post<ServiceResponse>(AppSettings.Blog_ADMIN_PANEL+'/post',post);
  }
  SaveOrUpdateTag(tag:Tag):Observable<ServiceResponse>{
    return this.http.post<ServiceResponse>(AppSettings.Blog_ADMIN_PANEL+'/tag',tag);
  }
  deleteTag(tagid:string):Observable<ServiceResponse>{
    return this.http.delete<ServiceResponse>(AppSettings.Blog_ADMIN_PANEL+'/tag?tagid='+tagid);
  }
  SaveOrUpdateCategory(category:Category):Observable<ServiceResponse>{
    return this.http.post<ServiceResponse>(AppSettings.Blog_ADMIN_PANEL+'/category',category);
  }
  deleteCategory(categoryid:string):Observable<ServiceResponse>{
    return this.http.delete<ServiceResponse>(AppSettings.Blog_ADMIN_PANEL+'/category?categoryid='+categoryid);
  }
  constructor(private http :HttpClient) { }
}
