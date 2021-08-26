import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  restUrl = "http://localhost:9090/allUsers"
  constructor(private http: HttpClient) { }

  getUserAccount(){
    return this.http.get(this.restUrl);
  }

}
