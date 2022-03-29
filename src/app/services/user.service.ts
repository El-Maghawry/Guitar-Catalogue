import { Injectable } from '@angular/core';
import { StorageKeys } from '../enum/storage-keys.enum';
import { User } from '../Models/user.model';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user?: User;

  public get user(): User | undefined {
    return this._user;
  }
  set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() { 
    const storedUser: User | undefined = StorageUtil.storageRead<User>(StorageKeys.User);
    this._user = storedUser;
  }
}
