import { Component, OnInit } from '@angular/core';
import { User } from "../models/user.model";
import {ActivatedRoute, Router} from "@angular/router";
import { SignUpService} from "./sign-up.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  user: User;
  repass = '';
  constructor(private signUpService: SignUpService, private route: ActivatedRoute, private router: Router) {
    this.user = new User();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.repass != this.user.password) {
      alert("Password does not match");
      this.user.username
        = this.user.password
        = this.repass
        = '';
    }
    else
    {
      this.signUpService.createUser(this.user).subscribe(
        success => {
          alert("Sign-up success");
          this.goToLoginPage();
        },
        error => {
          alert("Account already exists");
          this.user.username
            = this.user.password
            = this.repass
            = '';
        }
      )
    }
  }

  goToLoginPage() {
    this.router.navigate(['/index']);
  }
}
