import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  navigateToSelectCompanie(){
    this.router.navigate(['/select-companie']);
  }

  navigateToManageCompanies(){
    this.router.navigate(['/manage-companies']);
  }

  navigateToReports(){
    this.router.navigate(['/reports']);
  }

  navigateToUserInfo(){
    this.router.navigate(['/user-info']);
  }

  navigateToCalendar(){
    this.router.navigate(['/construction']);
  }

  navigateToSettings(){

  }

  navigateToInfo(){
    this.router.navigate(['/info']);
  }

  navigateToHelp(){
    this.router.navigate(['/help']);
  }

  navigateToStatistics(){
    this.router.navigate(['/construction']);
  }

}
