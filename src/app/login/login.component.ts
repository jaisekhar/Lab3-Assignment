
import { Component, OnInit } from '@angular/core';
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
    const emails = localStorage.getItem('email');
    const pwd = localStorage.getItem('password');
    const name = localStorage.getItem('name');

    console.log(emails, pwd);
    if (emails == value.email_id && pwd == value.passwd) {
      alert('welcome    ' + name);
      localStorage.setItem('current', 'true');
      this.router.navigate(['/home']);
    } else {
      alert('Incorrect Email or Password');
    }
  }
  ngOnInit() {
  }

}

