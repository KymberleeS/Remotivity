import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SurveyService } from './survey.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  submitted = false;

  rate = new FormGroup ({
    rating: new FormControl(),
    rating2: new FormControl(),
    rating3: new FormControl(),
  });

  constructor(
    private router: Router,
    private surveyService: SurveyService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;

    this.surveyService.rating = this.rate.get('rating').value;
    this.surveyService.rating2 = this.rate.get('rating2').value;
    this.surveyService.rating3 = this.rate.get('rating3').value;

  this.router.navigate([/*/'home' goes here when backend is setup*/]);    
  }
}
