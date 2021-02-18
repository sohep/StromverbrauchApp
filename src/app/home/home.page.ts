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
}
