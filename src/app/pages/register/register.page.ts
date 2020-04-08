import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  animations: [
    trigger('slideTopButton', [
      transition('void => *', [
        style({transform: 'translateY(300%)'}),
        animate('500ms 200ms ease-out', style({transform: 'translateY(0%) rotate(45deg)'}))
      ])
    ])
  ]
})
export class RegisterPage implements OnInit {

  private emailErrorMessage: string;
  private passwordErrorMessage: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private navigateToHome(){
    this.router.navigate(['/home']);
  }

  private navigateToLogin(){
    this.router.navigate(['/login']);
  }

}
