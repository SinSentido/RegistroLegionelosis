import { AccountService } from './../../services/account/account.service';
import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.page.html',
  styleUrls: ['./recover-password.page.scss'],
})
export class RecoverPasswordPage implements OnInit {

  email: string = "";
  emailErrorMessage: string = "";
  formError: boolean = false;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
  }

  sendRecoveryEmail(){
    this.formError = false;

    if(this.validateEmail()){
      this.accountService.sendPasswordRecoveryEmail(this.email).then(() => {
        console.log("Email sent")
      }).catch(error => {
        if(error.code == "auth/user-not-found"){
          this.emailErrorMessage = "*El email introducido no corresponde a ningún usuario."
          this.formError = true;
        }
      });
    }
    else{
      this.formError = true;
    }
  }

  validateEmail(): boolean {
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
      this.emailErrorMessage = "*Tienes que introducir un email";
    }

    return isValid;
  }
 
}
