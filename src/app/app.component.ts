import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ardeshir Ahouri';
  constructor(private router: Router) { }
  searchPost(value)
  {
    this.router.navigateByUrl('/posts?keyword='+value);
  }
}