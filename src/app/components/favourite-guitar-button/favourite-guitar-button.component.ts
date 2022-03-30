import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user.model';
import { FavouriteService } from 'src/app/services/favourite.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-favourite-guitar-button',
  templateUrl: './favourite-guitar-button.component.html',
  styleUrls: ['./favourite-guitar-button.component.css']
})
export class FavouriteGuitarButtonComponent implements OnInit {

  public isFavourite: boolean = false;
  @Input() guitarId: string = "";

  get loading(): boolean {
    return this.favouriteService.loading;
  }

  constructor(
    private readonly userSerivce: UserService,
    private readonly favouriteService: FavouriteService
  ) { }

  ngOnInit(): void {
    // inputs are resolved!
    this.isFavourite = this.userSerivce.inFavourites(this.guitarId);
  }

  onFavoriteClick(): void {
    // add the guitar to the favourites
    this.favouriteService.addToFavourites(this.guitarId)
    .subscribe({
      next: (response: User) => {
        console.log("Next", response);
      },
      error: (error: HttpErrorResponse) => {
        console.log("Error", error.message)
      }
    })
  }

}
