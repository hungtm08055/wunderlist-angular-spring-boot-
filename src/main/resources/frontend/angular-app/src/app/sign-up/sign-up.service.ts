import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root'})

export class SignUpService {
  constructor(private http: HttpClient) {
  }

  createUser(user: User) {
    return this.http.post<User>('http://localhost:8080/register', user);
  }
}

