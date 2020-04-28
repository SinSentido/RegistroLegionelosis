import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

//services
import { AccountService } from './../../services/account/account.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('slideTopButton', [ 
      transition('void => *', [
        style({transform: 'translateY(400%)'}),
        animate('500ms 500ms ease-out', style({transform: 'translateY(0%) rotate(45deg)'}))
      ])
    ]),

    trigger('slideTopForm', [
      transition('void => *', [
        style({transform: 'translateY(300%)'}),
        animate('500ms ease-out', style({transform: 'translateY(0%)'}))
      ])
    ]),
  ]
})
export class LoginPage implements OnInit {
 
  email: string;
  password: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  loginError: boolean = false;
  loading: boolean;

  constructor(
    public router: Router,
    private nativePageTransitions: NativePageTransitions,
    private accountService: AccountService,
    private localStorage: LocalStorageService) { }

  ngOnInit() {
  }

  login(){
    if(this.validateRegisterForm()){
      this.accountService.loginUser(this.email, this.password).then(res => {
        this.localStorage.saveUserId(res.user.uid);
        this.loading = false;
        this.navigateToHome();
      }).catch(error => {
        if(error.code == "auth/wrong-password" || error.code == "auth/user-not-found"){
          this.emailErrorMessage = "*El usuario o la contraseña no son correctos";
          this.loginError = true;
        }
        this.loading = false;
      })
    }
  }

  navigateToRegister(){
    let options: NativeTransitionOptions = {
      direction: 'right',
      duration: 400,
    }

    this.nativePageTransitions.flip(options);
    this.router.navigate(['/register']);
  }

  navigateToRecoverPassword(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.router.navigate(['/recover-password']);
  }

  private navigateToHome(){
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 400,
    }

    this.nativePageTransitions.slide(options);
    this.router.navigate(['/home']);
  }

  //Validates all the fields in the register formulary
  private validateRegisterForm(): boolean{
    this.loading = true;
    this.loginError = false;
    let isValid: boolean = false;

    if(this.validateEmail()){ //if the email is valid
      if(this.validatePassword()){ //if the password is valid
        isValid = true;
      }
      else{ //if password is not valid
        setTimeout(() => {
          this.loginError = true;
          this.loading = false;
        }, 1000);
      }
    }
    else{ //if email is not valid
      setTimeout(() => {
        this.loginError = true;
        this.loading = false;
      }, 1000);
    }

    return isValid;
  }

  //Validates the introduced email in the register formulary
  private validateEmail(): boolean{
    this.emailErrorMessage = "";
    let isValid: boolean = false;

    if(this.email != "" && this.email != undefined && this.email != null){ //check the email is not empty
      if(this.email.match(new RegExp("[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+"))){ //check the email has a correct format
        isValid = true;
      }
      else{
        this.emailErrorMessage = "*El email no tiene un formato válido";
      }
    }
    else{
      this.emailErrorMessage = "*El email es obligatorio";
    }

    return isValid;
  }

  //Validates the introduced password is a valid password
  private validatePassword(): boolean{
    this.passwordErrorMessage = "";
    let isValid: boolean = false;

    if(this.password != "" && this.password != undefined && this.password != null && this.password.length >= 8){
      isValid = true;
    }
    else{
      this.passwordErrorMessage = "*La contraseña debe tener 8 carácteres como mínimo.";
    }

    return isValid;
  }

}
