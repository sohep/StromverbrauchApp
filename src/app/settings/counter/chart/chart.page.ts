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
  costsPerState: any = [];
  grundpreis: any = [];
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
            this.costsPerState.push(status.status * this.data.ppkw)
            this.grundpreis.push(this.data.basicPrice)
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
        datasets: [
          {
            label: 'Ihre Stromverbrauch in KW',
            data: this.states,
            backgroundColor: 'rgb(38, 194, 200)',
            borderColor: 'rgb(38, 194, 200)',
            borderWidth: 1
          },
          {
            label: 'Ihre Stromverbrauch in Euro',
            data: this.costsPerState,
            backgroundColor: 'rgb(38, 194, 129)',
            borderColor: 'rgb(38, 194, 129)',
            borderWidth: 1
          },
          {
            label: 'Monatliche Grundpreis in Euro',
            data: this.grundpreis,
            backgroundColor: 'rgb(169,169,169)',
            borderColor: 'rgb(169,169,169)',
            borderWidth: 1
          }
        ]
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

  getAllTimeCost() {
    let sum: number = 0;
    for(let item of this.states) {
      sum = sum + item
    }
    return sum * this.data.ppkw
  }

  getFirstDate() {
    console.log(this.dates)

    return this.dates[0]
  }

  getLastDate() {
    return this.dates[this.dates.length - 1]
  }

}
