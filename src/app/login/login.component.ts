import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private _apiService : ApiService,
    private _sharedService :SharedService,
    private router :  Router){}
  
  public loginForm! : FormGroup
  logoImage   = 'assets/web_logo.png';
  accountImage = 'assets/account-panda.png';
  orImage      ='assets/OR.png';

  ngOnInit(){
    this.createLoginForm();
  }

  private createLoginForm(){
    this.loginForm = this.formBuilder.group({
      username    : ['', Validators.required],
      password    : ['', Validators.required],
    });
  }
  submitDetails(){
    console.log(this.loginForm.value);
    const data = JSON.stringify(this.loginForm.value);
    this._apiService.userLogin(data).subscribe((data:any)=>{
      this._sharedService.isAuthenticated = true;
      this._sharedService.isrole = data.role;
      this._apiService.setToken(data.token);
      this.router.navigate(['home'])
    })
  }
}
