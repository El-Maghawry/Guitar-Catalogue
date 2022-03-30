import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Guitar } from '../Models/guitar.model';

const { apiGuitars } = environment;

@Injectable({
  providedIn: 'root'
})

export class GuitarCatalogueService {

  private _guitars: Guitar[] = [];
  private _error: string = "";
  private _loading: boolean = false;

  get guitars(): Guitar[]{
    return this._guitars;
  }

  get loading(): boolean {
    return this._loading;
  }
  
  get error(): string {
    return this._error;
  }

  constructor(private readonly http: HttpClient) { }

  public findAllGuitars(): void {
    this._loading = true;
    this.http.get<Guitar[]>(apiGuitars)
    .pipe(
      finalize(() => {
        this._loading = false;
      })
    )
    .subscribe({
      next: (guitars: Guitar[]) => {
        this._guitars = guitars;
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      }
    })
  }
  }
