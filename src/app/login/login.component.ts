import { Component, OnInit } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LogService } from '../log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser;
  serverErrorMessages: string;

  constructor(private authService:AuthService,private router:Router,private logService:LogService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
    //  res=>{ 
    this.user = user;
      console.log(user);
      console.log(user.idToken);
      //this.logService.setToken(res['token']);
    this.logService.login(user.idToken).subscribe(data => {
      this.router.navigateByUrl('/home');

    });
  //  }
    /*err=>{
      this.serverErrorMessages = err.error.message; }*/
    });
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

  }


  signOut(): void {
    this.authService.signOut();
  }

}
