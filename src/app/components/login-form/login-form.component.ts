import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/Models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
// dependency injeciton
  constructor(private readonly loginService: LoginService) { }

    public loginSubmit(loginForm: NgForm): void {

      //username 
      const { username } = loginForm.value;

      this.loginService.login(username)
      .subscribe({
        next: (user: User) => {

        },
        error: () => {

        }
      })
   }

  ngOnInit(): void {
  }

}
