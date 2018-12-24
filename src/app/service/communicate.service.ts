import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {
  private Message = new Subject<string>();
  sentMessage$ = this.Message.asObservable();
  
  getMessage(message: string) {
    this.Message.next(message);
  }
  constructor() { }
}
