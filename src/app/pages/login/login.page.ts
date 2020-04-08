import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private emailErrorMessage: string;
  private passwordErrorMessage: string;

  constructor(public router: Router,
    private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {
  }

  login(){
    this.navigateToHome();
  }

  private navigateToRegister(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 2000,
      slowdownfactor: 3,
      slidePixels: 20,
      iosdelay: 100,
      androiddelay: 150,
      fixedPixelsTop: 0,
      fixedPixelsBottom: 60
    }

    this.nativePageTransitions.slide(options);
    this.router.navigate(['/register']);
  }

  private navigateToHome(){
  }

}
