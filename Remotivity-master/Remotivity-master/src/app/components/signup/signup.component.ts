// imports
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
//import { first } from 'rxjs/operators';     (unsure if needed)

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  register: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,      // unsure if needed
    private router: Router,   
    private signupService: SignupService
  ) { }

  // validators for signup fields
  ngOnInit(): void {
    this.register = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      validatePassword: ['', Validators.required],
    });
  }

  // getter for password field - gets and returns the input value
  get password() {
    return this.register.get('password');
  }

  // getter for validatePassword field - gets and returns the input value
  get validatePassword() {
    return this.register.get('validatePassword');
  }

  // returns the form controls
  get reg() {
    return this.register.controls;
  }

  // function for form submition
  onSubmit(): void {
    this.submitted = true;
    // sending data to backend (only set up for now)
    this.signupService.register(this.register.value)
      .subscribe(
        response => console.log('Success', response),
        error => console.log('Error', error)
      )
    // redirect to home page after registration
      this.router.navigate([/**/]);     
  }

  // for adding remotivity logo and title to the page
  titleLogo: string = "assets/images/remotivity-logo.png";
  imgLogo: string = "assets/images/img-logo.png";
}
