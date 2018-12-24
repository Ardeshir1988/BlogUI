import { Injectable } from '@angular/core';

import { Tag } from '../tag';
import { HttpClient, HttpHeaders,HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


import { catchError } from 'rxjs/operators';
import { errorHandler } from '@angular/platform-browser/src/browser';
import { Router } from '@angular/router';
import { AppSettings } from '../AppSettings';


@Injectable({
  providedIn: 'root'
})

export class TagService {


  getTags(){
  //   let headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer '+localStorage.getItem('accesstoken') });
  // let options = { headers: headers };

     return this.http.get<Tag[]>(AppSettings.Blog_TAG);
  //  .pipe(catchError((res: HttpErrorResponse ) => {
  //     if (res.status === 401) {
  //        this.router.navigate(['/login']);
  //        return throwError('redirect to login--------TagServiceException------'+res.message);
  //     }
  //     return throwError('=====tagService Exc====='+res.status);
  // }));;
  }

  constructor(private http :HttpClient,public router: Router) { 
  }
  
}
