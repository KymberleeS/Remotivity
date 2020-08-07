import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.component.html',
  styleUrls: ['./reminders.component.scss']
})
export class RemindersComponent implements OnInit {
  public show:boolean = false;

  entries = [
    {title:"Drink Water", Frequency: "Sun., Mon., Tue., Wed., Thu., Fri., Sat.", times: "8:00 am, 12:00 pm, 6:00 pm", details: "drink 80 oz. a day."},
    {title:"Gaming with Josh", Frequency: "Sun.", times: "2:13 am", details: "on discord; note: video games are fun and can relieve stress too!"},
  ];
  displayContent;
  displayContent2;
  displayContent3;
  displayContent4;

  constructor() { }

  ngOnInit(): void {
  }

  public buttonsTexts:Array<string> = ['First button'];

  public addButton():void {
    this.entries.push({title:"Excercise", Frequency: "Sat.", times: "6:00 am", details: "go jogging"})
  }

  toggle(entry) {
    this.show = !this.show;
    this.displayContent=entry.title;
    this.displayContent2=entry.Frequency;
    this.displayContent3=entry.times;
    this.displayContent4=entry.details;
  }
}
