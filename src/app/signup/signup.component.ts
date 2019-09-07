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
