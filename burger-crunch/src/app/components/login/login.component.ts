import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private usersService: UsersService, private router: Router) {

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
    email: new FormControl('iam@fakel.lol', Validators.required),
    password: new FormControl('apasswordtochange', Validators.required),
  });}

  onLogin() {
    console.log(this.loginForm.value);
    this.usersService.getTokenAuth(this.loginForm.value)
    .subscribe((data) => {
      // console.log('DATA:::', data);
            if (data.token) {
            console.log(data.token)
            localStorage.setItem("token", data.token)
           this.router.navigate(['menu']);
            }
    });
  }
}
