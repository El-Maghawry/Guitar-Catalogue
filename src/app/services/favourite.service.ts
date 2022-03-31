import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guitar } from '../Models/guitar.model';
import { User } from '../Models/user.model';
import { GuitarCatalogueService } from './guitar-catalogue.service';
import { UserService } from './user.service';

const {apiKey, apiUsers} = environment


@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  private _loading: boolean = false;

  get loading(): boolean {
    return this._loading;
  }

  constructor(
    private http: HttpClient,
    private readonly guitarService: GuitarCatalogueService,
    private readonly userService: UserService,
  ) { }

public addToFavourites(guitarId: string): Observable<User> {
  if (!this.userService.user) {
    throw new Error("addToFavourites: There is no user")
  }
  const user: User = this.userService.user;
  const guitar: Guitar | undefined = this.guitarService.guitarById(guitarId);

  if (!guitar){
    throw new Error(`addToFavourites: No guitar with id: ` + guitarId)
  }
  if (this.userService.inFavourites(guitarId)) {
    this.userService.removeFromFavourites(guitarId);
  } else{
    this.userService.addToFavourites(guitar);
  }
  const headers = new HttpHeaders({
    'content-type': 'application/json',
    'x-api-key': apiKey
  })
  this._loading = true;

  return this.http.patch<User>(`${apiUsers}/${user.id}`, {
    favourites: [...user.favourites] // already updated
  }, {
    headers
  })
  .pipe(
    tap((updatedUser: User)=>{
      this.userService.user = updatedUser;
    }),
    finalize(() => {
      this._loading = false;
    })
  )
}

}
