import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showSidemenu = ['/dashboard', '/referrals','/referrals/referrals', '/referrals/new','/pathology','/imaging', '/profile', '/reports'];

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
    
  }
}

