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
}
