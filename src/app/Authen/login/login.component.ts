import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../../_services';

/*************************************** */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const url_base= "http://217.61.97.245:8080/api/user/auth";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  error = '';

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    } 
  }

  public flags = [
    { text: 'Français', url: '#', icon: 'flag-icon flag-icon-fr mr-2'},
    { text: 'Arabe', url: '#', icon: 'flag-icon flag-icon-dz mr-2'},
    { text: 'English', url: '#', icon: 'flag-icon flag-icon-us mr-2'},
    { text: 'Spanish', url: '#', icon: 'flag-icon flag-icon-es mr-2'},
  ];

  ngOnInit() {
   this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'; 
  }

  login(){
    this.router.navigateByUrl('dashboard');
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

/*   onSubmit() {
    this.submitted = true;
      
    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f['username'].value, this.f['password'].value)
      .pipe(first())
      .subscribe(
        (data) => {
          alert("data = " + data);
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          alert("erreur = " + error.message);
          this.alertService.error(error);
          this.loading = false;
        }
      );
  } */

  
/*    authlogin(username: string, password: string): Observable<User>{
     alert("username = " + username + " | passord = " + password);
     return this.http.post(url_base ,{ username, password }, httpOptions);
    } */
    
/*   onSubmit() {
    this.authlogin(this.f['username'].value, this.f['password'].value)
    .pipe(first())
    .subscribe(
      (data) => {
        alert("data = " + data);
        this.router.navigate([this.returnUrl]);
      },
      (error) => {
        alert("erreur = " + JSON.stringify(error.message) + " status ="+ JSON.stringify(error.status));
        this.alertService.error(error);
        this.loading = false;
      }
    );
} */


onSubmit() {
  if (this.loginForm.invalid) {
    return;
  }
  console.log(" on submittttt " );

  this.authenticationService
    .login(this.f['username'].value, this.f['password'].value).subscribe(
      data => {
        //console.log("dataaaaaaaa = " + data);
        this.router.navigate(['/home']);
      },
      error => {
        alert("login error = " + error);
        this.error = error;
      },
    );
}

onRegister() {
  this.authenticationService
  .register(this.f['username'].value, this.f['password'].value).subscribe(
    data => {
        alert("Inscription avec success !!")
      },
      error => {
        alert("Inscription Erreur = " + error)
        this.error = error;
      },
    );
}

}


class User {
// id?: number;
  username?: string;
  password?: string;
 // token?: string;
}