
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  onSubmit(value: any) {
    console.log(value);  // { first: '', last: '' }
    // false
    // localStorage.setItem('email', value.email_id);
    // localStorage.setItem('password', value.passwd);
    let emails=localStorage.getItem('email');
    let pwd=localStorage.getItem('password');
    let name=localStorage.getItem('name');

    console.log(emails, pwd);
    if(emails == value.email_id && pwd==value.passwd){
      alert('welcome    ' + name);
      localStorage.setItem('current', 'true');
      this.router.navigate(['/home']);
    }
    else{
      alert('Incorrect Email or Password');
    }
  }
  ngOnInit() {
  }

}

// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   @ViewChild('email', { static: false, }) emailRef: ElementRef;
//   @ViewChild('password', { static: false, }) passwordRef: ElementRef;
//   emailValue: any;
//   passwordValue: any;
//   constructor() { }
//
//   ngOnInit() {
//   }
//
//   getLogin() {
//
//     this.emailValue = this.emailRef.nativeElement.value;
//     this.passwordValue = this.passwordRef.nativeElement.value;
//     console.log(this.emailValue + this.passwordValue);
//   }
// }
