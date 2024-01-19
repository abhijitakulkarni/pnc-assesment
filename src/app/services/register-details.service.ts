import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { RegisterUser } from '../models/register-user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterDetailsService {

  constructor(private http: HttpClient) { }

  public getUserDetails(): Observable<UserDetails> {
    return this.http.get<UserDetails>("https://mocki.io/v1/611a3036-4420-48a5-b8da-9b461853cdd2");
  }

  public registerUser(registerUser: RegisterUser): Observable<{success:boolean}> {
    return this.http.get<{success:boolean}>("https://mocki.io/v1/7f434df6-a4ac-4817-ab7c-dd39a564d01d");
  }
}
