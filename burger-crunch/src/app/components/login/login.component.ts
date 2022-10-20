import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private usersService: UsersService) {
    this.loginForm = new FormGroup({
      email: new FormControl('iam@fakel.lol', Validators.required),
      password: new FormControl('apasswordtochange', Validators.required),
    });
  }

  ngOnInit(): void {}

  onLogin() {
    console.log(this.loginForm.value);
    this.usersService.getTokenAuth(this.loginForm.value).subscribe((data) => {
      console.log('DATA:::', data);
    });
  }
}
