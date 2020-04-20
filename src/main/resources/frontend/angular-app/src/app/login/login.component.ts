import { Component, OnInit } from '@angular/core';
import { LoginService } from "./login.service";
import { User } from "../models/user.model";
import { ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  user: User;

  constructor(private loginService: LoginService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit() {
    this.loginService.getUser(this.user).subscribe(
        success => {
          if(success == null) {
            alert("Invalid Username or Password");
            this.user.username = '';
            this.user.password = '';
          }
          else {
            alert("Login Success");
            this.goToHomePage();
            sessionStorage.setItem("user_id", success.id);
            sessionStorage.setItem("username", this.user.username);
          }
        }
        // error => { alert('Not Found User')}
      )
    }

  goToHomePage() {
    this.router.navigate(['/home']);
  }
}
