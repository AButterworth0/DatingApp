import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';
import { BusyService } from './_services/busy.service';
import { PresenceService } from './_services/presence.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', //this html file is the view for this component
  styleUrls: ['./app.component.css'] //this css file is the style sheet for the view
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users: any;

  constructor(private accountService: AccountService,private presence: PresenceService ,private spinner: NgxSpinnerService) {}

  ngOnInit() {
   this.setCurrentUser();
  }

  setCurrentUser(){
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.accountService.setCurrentUser(user);
      this.presence.createHubConnection(user);
    }
  }

}
