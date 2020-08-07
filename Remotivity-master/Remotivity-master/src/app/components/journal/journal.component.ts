import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  public show:boolean = false;

  entries = [
    {title:"First day of August!", date: "08/01/20", content:"Today is the first day of August! The year went by really quick."},
    {title:"I love food so much", date: "08/05/20", content:"Can we just appreciate how good food is? Food is amazing, I'm so glad we need it to stay alive."},
  ];
  displayContent;
  displayContent2;
  displayContent3;
  

  constructor() { }

  ngOnInit(): void {
  }

  public buttonsTexts:Array<string> = ['First button'];

  public addButton():void {
    this.entries.push({title:"Journal Entry Demo", date: "08/07/20", content:"This is my journal entry for the demo."})
  }

  toggle(entry) {
    this.show = !this.show;
    this.displayContent=entry.title;
    this.displayContent2=entry.date;
    this.displayContent3=entry.content;
  }
}