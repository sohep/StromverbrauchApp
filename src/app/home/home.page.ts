import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isLoading: boolean;
  data: any = [];
  constructor(private storage: Storage, private router: Router) {}

  ionViewWillEnter() {
    this.isLoading = true;
    this.storage.get('counters').then(res => {
      this.data = res;
      this.isLoading = false;
    })
  }

  addCounter() {
    this.router.navigate(['/create-counter']);
  }

  addStatus(counterNumber) {
    this.router.navigate(['/add-status', counterNumber]);
  }

  openChart(counterNumber) {
    this.router.navigate(['/chart', counterNumber]);
  }

  async deleteStatus(event, status) {
    event.target.parentElement.remove();
    for(let item of this.data) {
      for (var i=0; i < item.status.length; i++) {
        if( item.status[i] &&  item.status[i].date === status.date){ 
          item.status.splice(i,1);
        }
      }
    }
    await this.storage.set('counters', this.data);
  }

  async deleteCounter(event, counterNumber) {
    console.log(event)
    event.target.parentElement.parentElement.remove();
    for (var i = 0; i < this.data.length; i++) {
      var obj = this.data[i];
      if (obj.counterNumber == counterNumber) {
        this.data.splice(i, 1);
      }
    }
    await this.storage.set('counters', this.data);
  }

  getAllTimeCost(status, basicPrice, ppkw, discounts, counterDate) {
    let date = this.formatDate(new Date(counterDate));
    let sum: number = 0;
    let monthCount = 1;
    for(let item of status) {
      let currentDate = this.formatDate(new Date().toString());
      sum = sum + item.status
      monthCount = this.dateRange(date, currentDate);
    }
    return (discounts * monthCount) - (sum * ppkw + basicPrice)
  }

  dateRange(startDate, endDate) {
    var start      = startDate.split('-');
    var end        = endDate.split('-');
    var startYear  = parseInt(start[0]);
    var endYear    = parseInt(end[0]);
    var dates      = [];
  
    for(var i = startYear; i <= endYear; i++) {
      var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
      var startMon = i === startYear ? parseInt(start[1])-1 : 0;
      for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
        var month = j+1;
        var displayMonth = month < 10 ? '0'+month : month;
        dates.push([i, displayMonth, '01'].join('-'));
      }
    }
    return dates.length;
  }

  formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) 
      month = '0' + month;
    if (day.length < 2) 
      day = '0' + day;
    return [year, month, day].join('-');
  }
}
