import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToAboutLegionella(){
    this.router.navigate(['/about-legionella']);
  }

  navigateToRegulation(){
    this.router.navigate(['/regulation']);
  }

}
