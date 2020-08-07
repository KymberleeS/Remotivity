import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entryhistory',
  templateUrl: './entryhistory.component.html',
  styleUrls: ['./entryhistory.component.scss']
})
export class EntryhistoryComponent implements OnInit {
  public show:boolean = false;
  public show2:boolean = false;
  public show3:boolean = false;
  public show4:boolean = false;
  public show5:boolean = false;
  public show6:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }

  toggle2() {
    this.show2 = !this.show2;
  }

  toggle3() {
    this.show3 = !this.show3;
  }

  toggle4() {
    this.show4 = !this.show4;
  }

  toggle5() {
    this.show5 = !this.show5;
  }

  toggle6() {
    this.show6 = !this.show6;
  }
}
