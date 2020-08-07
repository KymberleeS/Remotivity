import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal/modal.service';

//import {MatSliderModule} from '@angular/material/slider'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  today: Date = new Date();
  bodyText: string;
  value1 = 0;
  value2 = 0;
  value3 = 0;
  activeMonth;
  activeDay;
  data = [
    {id:1, month: 8, day: 1, dayRating: 3, productivityRating: 4, stressRating: 3},
    {id:1, month: 8, day: 2, dayRating: 3, productivityRating: 4, stressRating: 3},
    // {id:1, month: 8, day: 3, dayRating: 3, productivityRating: 4, stressRating: 3},
    // {id:1, month: 8, day: 4, dayRating: 3, productivityRating: 4, stressRating: 3},
    // {id:1, month: 8, day: 5, dayRating: 3, productivityRating: 4, stressRating: 3},
    // {id:1, month: 8, day: 6, dayRating: 3, productivityRating: 4, stressRating: 3},
  ];
  
  constructor(private modalService: ModalService) { }
  days: number;
  date: any = new Date();
  start: number;
  //Month the user selects, default current
  selectedMonth:number;

  daysInMonth(){
    let month = this.date.getMonth();
    let year = this.date.getFullYear();
    this.days = new Date(year, month, 0).getDate();
  }

  startOfMonth(){
    let month = this.date.getMonth();
    let year = this.date.getFullYear();
    this.start = new Date(year, month, 1).getDay();
  }

  getDateData(selectedDate, index){
    //also check user id to match
    let month=selectedDate.getMonth()+1;
    let x=this.data.filter(function (el) {
      return el.month == month &&
             el.day == index;
    });
    if(x.length>0){
      return true;
    }
    else{
      return false;
    }
  }

  dotOnDate(selectedDate, index)
  {
    let month=selectedDate.getMonth()+1;
    if(index==7 || index==8 || index==10 || index==18 || index==21 || index==23 || index==30){
      return true;
    }
    else{
      return false;
    }
  }

  firstDot(selectedDate, index)
  {
    let month=selectedDate.getMonth()+1;
    if(index==7){ return true;}
    else{ return false;}
  }
  secondDot(selectedDate, index)
  {
    let month=selectedDate.getMonth()+1;
    if(index==8){ return true;}
    else{ return false;}
  }
  thirdDot(selectedDate, index)
  {
    let month=selectedDate.getMonth()+1;
    if(index==10){ return true;}
    else{ return false;}
  }
  fourthDot(selectedDate, index)
  {
    let month=selectedDate.getMonth()+1;
    if(index==18){ return true;}
    else{ return false;}
  }
  fifthDot(selectedDate, index)
  {
    let month=selectedDate.getMonth()+1;
    if(index==21){ return true;}
    else{ return false;}
  }
  sixthDot(selectedDate, index)
  {
    let month=selectedDate.getMonth()+1;
    if(index==23){ return true;}
    else{ return false;}
  }
  seventhDot(selectedDate, index)
  {
    let month=selectedDate.getMonth()+1;
    if(index==30){ return true;}
    else{ return false;}
  }

  ngOnInit(): void {
  this.daysInMonth();
  this.startOfMonth();
  this.selectedMonth=this.date.getMonth()+1;
  console.log(this.days, this.start);
  }

  openModal(id: string) {
    this.modalService.open(id);
    // this.activeMonth= date.getMonth()+1;
    // this.activeDay=day;
}

  closeModal(id: string) {
    // Logs the slider value to console
    console.log(this.value1, this.value2, this.value3);
    //update with actual user id
    // let entry={id:1, month: this.activeMonth, day: this.activeDay, dayRating: this.value1, productivityRating: this.value2, stressRating: this.value3}
    // let pushed=false;
    // for(var i = 0; i < this.data.length; i++)
    //   {
    //     if(this.data[i].day == this.activeDay && this.data[i].month == this.activeMonth)
    //     {
    //       this.data[i]=entry;
    //       pushed=true;
    //     }
    //   }

    // if(!pushed){
    //   this.data.push(entry);
    // }
    this.modalService.close(id);
  }
  
  formatLabel(value: number) {
    return value;
  }


}
