import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  userForm: FormGroup;
  constructor(private authenticationService:AuthenticationService,public router: Router) {
  }
  createFormGroup() {
    return new FormGroup({
        username: new FormControl('',[Validators.required,Validators.minLength(6)]),
        password: new FormControl('',[Validators.required,Validators.minLength(8)])
    });
  }
  onSubmit() {
    this.user = Object.assign({}, this.userForm.value);
    this.getToken(this.user);
  }
  getToken(user:User){
    this.authenticationService.getToken(user).subscribe(accessToken=>{
      console.log(accessToken.token);
    localStorage.setItem('accesstoken', accessToken.token);
      this.router.navigate(['/panel']);
    });
  }

  ngOnInit() {
    this.userForm = this.createFormGroup();
  }

}
