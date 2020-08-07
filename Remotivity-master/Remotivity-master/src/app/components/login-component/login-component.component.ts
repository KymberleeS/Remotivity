import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, FormBuilder} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  loginForm:FormGroup;
  formBuilder: FormBuilder;
  submitted = false;
  loading = false;

  constructor(
    private router: Router,
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email : new FormControl(null,[Validators.required ]),
      password : new FormControl(null,[Validators.required ])
    })
  }

  submit(){
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    console.log(this.loginForm.value);
    // store user details in local storage to keep user logged in between page refreshes
    localStorage.setItem('currentUser', JSON.stringify(this.loginForm.value));
    // routing to calendar/home component
    this.router.navigate(['/calendar']);    
  }

  isLoggedIn() {
    return localStorage.getItem('currentUser') != null;
  }
}