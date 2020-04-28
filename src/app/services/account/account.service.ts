import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private fireAuth: AngularFireAuth) { }

  //Creates a new user.
  signupUser(email: string, password: string){
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  //Log in a user if exists
  loginUser(email: string, password: string){
    return this.fireAuth.signInWithEmailAndPassword(email, password)
  }

  //Sends a verification email to the actual accound email address
  sendVerificationEmail(){
    this.fireAuth.authState.subscribe(user => {
      user.sendEmailVerification()
      .then(() => {
        console.log("Sending verification email...");
      });
    })
  }

  //sends an email to reset the password to the provided email address
  sendPasswordRecoveryEmail(email: string){
    return this.fireAuth.sendPasswordResetEmail(email)
  }
}
