import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.page.html',
  styleUrls: ['./add-status.page.scss'],
})
export class AddStatusPage implements OnInit {
  counterNumber: string;
  isLoading:Boolean;
  isSent: Boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private storage: Storage) {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.counterNumber = params["counterNumber"];
      console.log(this.counterNumber);
    });
  }

  ngOnInit() {
  }


  get status() {
    return this.counterForm.get('status');
  }

  get date() {
    return this.counterForm.get('date');
  }

  counterForm = this.formBuilder.group({
    status: [
      '',
      [
        Validators.required,
      ]
    ],
    date: [
      '',
      [
        Validators.required,
      ]
    ]
  });

  errorMessages = {
    status: [
      { type: 'required', message: 'required' },
    ],
    date: [
      { type: 'required', message: 'required' },
    ]
  }

  submit(){
    this.isLoading = true;

    let newStatus = {
      'status': this.counterForm.value.status,
      'date': this.counterForm.value.date,
    };

    this.storage.get('counters').then(res => {
      if(res) {
        res.find(x => x.counterNumber === this.counterNumber).status.push(newStatus);
        this.storage.set('counters', res).then(() => {
          this.isLoading = false;
          this.isSent = true;
          this.counterForm.reset();
        });
      }
    })
  }

}
