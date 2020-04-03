import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root'})

export class LoginService {
  constructor(private http: HttpClient) {
  }

  getUser(user: User) {
    return this.http.post<User>('http://localhost:8080/login', user);
  }
}

