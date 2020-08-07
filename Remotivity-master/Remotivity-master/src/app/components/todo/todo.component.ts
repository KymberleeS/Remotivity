import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public show:boolean = false;

  entries = [
    {title:"To do for August", date: "08/18/20", contents: "-get groceries\n-get gas\n-go to meeting\n-finish outline"},
  ];
  displayContent;
  displayContent2;
  displayContent3;

  constructor() { }

  ngOnInit(): void {
  }

  public buttonsTexts:Array<string> = ['First button'];

  public addButton():void {
    this.entries.push({title:"Vacation", date: "08/28/20", contents: "-clothes\n-toiletries\n-snacks"})
  }

  toggle(entry) {
    this.show = !this.show;
    this.displayContent=entry.title;
    this.displayContent2=entry.date;
    this.displayContent3=entry.contents;
  }
}
