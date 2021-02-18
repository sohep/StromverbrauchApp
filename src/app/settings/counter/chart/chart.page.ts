import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.page.html',
  styleUrls: ['./chart.page.scss'],
})
export class ChartPage implements OnInit {
  isLoading: boolean = true;
  counterNumber: number;
  data: any = [];
  dates: any = [];
  states: any = [];
  bars: any;
  colorArray: any;
  @ViewChild('barChart') barChart;

  constructor(private activatedRoute: ActivatedRoute, private storage: Storage) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.counterNumber = params["counterNumber"];
      this.storage.get('counters').then(res => {
        if(res) {
          this.data = res.find(x => x.counterNumber === this.counterNumber);
          for(let status of this.data.status) {
            this.dates.push(new Date(status.date).toDateString());
            this.states.push(status.status)
          }
          this.isLoading = false;
          console.log(this.data)
        }
      })
    });
  }

  ngOnInit() {
  }
  
  ionViewDidEnter() {
    this.createBarChart();
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: this.dates,
        datasets: [{
          label: 'Ihre Stromverbrauch in KW',
          data: this.states,
          backgroundColor: 'rgb(38, 194, 129)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

}
