import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from "@angular/common/http";
import { ContextMenuModule } from "ngx-contextmenu";
import { HomeDirective} from "./home/home.directive";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginService } from "./login/login.service";
import { HomeComponent } from './home/home.component';
import { HomeService } from "./home/home.service";
import { User } from "./models/user.model";
import { List } from "./models/list.model";
import { Task } from "./models/task.model";
import { Subtask} from "./models/subtask.model";
import { Comment } from "./models/comment.model";
import { FileModel } from "./models/file.model";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPassComponent,
    HomeComponent,
    HomeDirective
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        ContextMenuModule
    ],
  providers: [
    LoginService,
    HomeService,
    User,
    List,
    Task,
    Subtask,
    Comment,
    FileModel,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
