import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apptsched',
  templateUrl: './apptsched.component.html',
  styleUrls: ['./apptsched.component.scss']
})
export class ApptschedComponent implements OnInit {
  public show:boolean = false;

  entries = [
    {title:"Duy's Movie Night", date: "08/08/20", contents: "8 pm; Bring popcorn and Studio Ghibli movie collection!"},
    {title:"Tea Party at Amanda's", date: "08/10/20", contents: "3 pm; Make sure to buy bougie tea!"},
    {title:"Bowling Night with Mike McCall", date: "08/21/20", contents: "6 pm; polish bowling bowl; address: 123 street St."},
    {title:"Michelle's Birthday", date: "08/30/20", contents: "Greet Michelle a happy birthday! <3"},
  ];
  displayContent;
  displayContent2;
  displayContent3;

  constructor() { }

  ngOnInit(): void {
  }

  public buttonsTexts:Array<string> = ['First button'];

  public addButton():void {
    this.entries.push({title:"Weekend Getaway", date: "08/31/20 - 09/02/2020", contents: "Going on a road trip"})
  }

  toggle(entry) {
    this.show = !this.show;
    this.displayContent=entry.title;
    this.displayContent2=entry.date;
    this.displayContent3=entry.contents;
  }
}

