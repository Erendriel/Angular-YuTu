import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  fillerNav = [
    {name: 'Upload video' , route: '', icon: 'slideshow'},
    {name: 'Go online' , route: '', icon: 'record_voice_over'},]
    user = [
      {name: 'User name', email: 'correeishon', manage: 'Manach Yur Gugul Acaunt' , route: '', icon: 'account_circle_2x'},]
    fillerNav2 = [
      {name: 'Your channel' , route: '', icon: 'account_box'},
      {name: 'Paid membership' , route: '', icon: 'monetization_on'},
      {name: 'YuTu Studio (beta)' , route: '', icon: 'settings'},
      {name: 'Switch account' , route: '', icon: 'library_books'},
      {name: 'Sign out' , route: '', icon: 'exit_to_app'},
    ]
    fillerNav3 = [
      {name: 'Dark theme: off' , route: '', icon: 'brightness_4'},
      {name: 'Language' , route: '', icon: 'translate'},
      {name: 'Settings' , route: '', icon: 'settings'},
      {name: 'Your data in YuTu' , route: '', icon: 'verified_user'},
      {name: 'Help' , route: '', icon: 'help'},
      {name: 'Send feedback' , route: '', icon: 'feedback'},
      {name: 'Keyboard shortcuts' , route: '', icon: 'keyboard'},
    ]
    
  constructor() { }

  ngOnInit() {
  }

}
