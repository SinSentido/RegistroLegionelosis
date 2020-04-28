import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';

//services
import { AccountService } from '../../services/account/account.service';
import { DatabaseService } from '../../services/database/database.service';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  email: string;
  password: string;
  confirmPassword: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  confirmPasswordErrorMessage: string;
  registerError: boolean = false;
  loading: boolean;

  constructor(private router: Router,
    private nativePageTransitions: NativePageTransitions,
    private accountService: AccountService,
    private databaseService: DatabaseService,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
  }

  register(){
    if(this.validateRegisterForm()){
      this.accountService.signupUser(this.email, this.password)
      .then(res => {
        this.localStorageService.saveUserId(res.user.uid);
        this.accountService.sendVerificationEmail();
        this.loading = false;
        this.navigateToHome();
      })
      .catch(error => {
        if(error.code == "auth/email-already-in-use"){
          this.emailErrorMessage = "*El email ya existe."
          this.registerError = true;
        }
        this.loading = false;
      })
    }
  }

  //navigates to login page
  navigateToLogin(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
    }

    this.nativePageTransitions.flip(options);
    this.router.navigate(['/login']);
  }

  //navigates to home page
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
    this.registerError = false;
    let isValid: boolean = false;

    if(this.validateEmail()){ //if the email is valid
      if(this.validatePassword()){ //if the password is valid
        isValid = true;
      }
      else{ //if password is not valid
        setTimeout(() => {
          this.registerError = true;
          this.loading = false;
        }, 1000);
      }
    }
    else{ //if email is not valid
      setTimeout(() => {
        this.registerError = true;
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
    this.confirmPasswordErrorMessage = "";
    let isValid: boolean = false;

    if(this.password != "" && this.password != undefined && this.password != null && this.password.length >= 8){
      if(this.password == this.confirmPassword){
        isValid = true;
      }
      else{
        this.confirmPasswordErrorMessage = "Las contraseñas no coinciden";
      }
    }
    else{
      this.passwordErrorMessage = "*La contraseña debe tener 8 carácteres como mínimo.";
    }

    return isValid;
  }

}
