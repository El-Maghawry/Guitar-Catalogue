import { Component, OnInit } from '@angular/core';
import { Guitar } from 'src/app/Models/guitar.model';
import { User } from 'src/app/Models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css']
})
export class ProfilePage implements OnInit {

  get user(): User | undefined{
    return this.userService.user;
  }

  get favourites(): Guitar[]{
    if (this.userService.user){
      return this.userService.user.favourites
    }
    return [];
  }
  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
