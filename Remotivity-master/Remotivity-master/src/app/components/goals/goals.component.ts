import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
  public show:boolean = false;

  entries = [
    {title:"Summer Internship 2020 Goal", goal: "Short-term", date: "08/07/20", contents: "Have a successful internship"},
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
    this.entries.push({title:"College", goal: "Long-term", date: "05/30/21", contents: "Graduate and pursue early career."})
  }

  toggle(entry) {
    this.show = !this.show;
    this.displayContent=entry.title;
    this.displayContent2=entry.goal;
    this.displayContent3=entry.date;
    this.displayContent4=entry.contents;
  }
}
