import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router: Router) {

  }

  onSubmit(value: any) {
    console.log(value);  // { first: '', last: '' }
    localStorage.setItem('name', value.name);
    localStorage.setItem('email', value.email_id);
    localStorage.setItem('password', value.passwd);
    alert('Successfully Registered. Please Login now');
    this.router.navigate(['/']);
  }

  ngOnInit() {

  }
}


// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
//
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   @ViewChild('name', { static: false, }) nameRef: ElementRef;
//   @ViewChild('email', { static: false, }) emailRef: ElementRef;
//   @ViewChild('password', { static: false, }) passwordRef: ElementRef;
//   nameValue: any;
//   emailValue: any;
//   passwordValue: any;
//   constructor() { }
//
//   ngOnInit() {
//   }
//
//   register() {
//     this.nameValue = this.nameRef.nativeElement.value;
//     this.emailValue = this.emailRef.nativeElement.value;
//     this.passwordValue = this.passwordRef.nativeElement.value;
//     console.log(this.nameValue + this.emailValue + this.passwordValue);
//   }
// }
