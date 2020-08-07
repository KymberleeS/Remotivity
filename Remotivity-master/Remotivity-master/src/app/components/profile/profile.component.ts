import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  name: String;
  email: String;
  password: String;
  updated = false;

  // constructor() {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   this.username = JSON.parse(localStorage.getItem('username'));
  //  }

  constructor() {
  
   }

  ngOnInit(): void {

  }

  update()
  {
    this.updated = true;
    this.name="User Example";
    this.email="user465@gmail.com";
    this.password="123456";
  }

}
