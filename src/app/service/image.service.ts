import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private imagessUrl = 'http://localhost:4200/api/images/'; 
  getImage(imagename:string): Observable<string>{
    return this.http.get<string>(this.imagessUrl+imagename);
  }
   constructor(private http :HttpClient) { }
}
