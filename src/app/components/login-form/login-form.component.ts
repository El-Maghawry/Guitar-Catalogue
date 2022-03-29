import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user.model';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{

  @Output() login: EventEmitter<void> = new EventEmitter();
// dependency injeciton
  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
    ) { }

    public loginSubmit(loginForm: NgForm): void {

      //username 
      const { username } = loginForm.value;

      this.loginService.login(username)
      .subscribe({
        next: (user: User) => {
          this.userService.user = user;
          this.login.emit();
          // redirect to the catalogue page
          // user - do we need the user?
        },
        error: () => {
          // handle that locally in the component

        }
      })
   }

  ngOnInit(): void {
  }

}
