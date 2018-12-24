import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../category';
import { Observable } from 'rxjs';
import { AppSettings } from '../AppSettings';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  getCategory():Observable<Category[]>{
       return this.http.get<Category[]>(AppSettings.Blog_CATEGORY);
    }
  constructor(private http :HttpClient) { }
}
