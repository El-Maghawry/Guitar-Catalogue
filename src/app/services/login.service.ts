import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { StorageKeys } from '../enum/storage-keys.enum';
import { User } from '../Models/user.model';
import { StorageUtil } from '../utils/storage.util';

const { apiUsers, apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // Dependency Injection
  constructor(private readonly http: HttpClient) { }

  // Modules, ClientHTTP ,observables, and RxJS operators.
  // login
  public login(username: string): Observable<User> {
    return this.checkUsername(username)
    .pipe(
      switchMap( (user: User | undefined) => {
        if (user === undefined) { // user does not exist
          return this.createUser(username);
        }
        return of(user);

      }),
      tap((user: User) => { // local stroge
        StorageUtil.storageSave<User>(StorageKeys.user, user);
      })
    )
  }

  //check if user exists
  private checkUsername(username: string): Observable<User | undefined>{
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
    .pipe(
      map((response: User[]) => response.pop() )
    )
  }

  //If not user -> create a user
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      favourites: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    });

    return this.http.post<User>(apiUsers, user, {  // url, data , config
      headers
    })
  }

  // if user || created user -> store user
}
