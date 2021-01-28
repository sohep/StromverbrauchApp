import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-create-counter',
  templateUrl: './create-counter.page.html',
  styleUrls: ['./create-counter.page.scss'],
})
export class CreateCounterPage implements OnInit {
  isLoading:Boolean;
  isSent: Boolean = false;

  constructor(private formBuilder: FormBuilder, private storage: Storage) { }

  ngOnInit() {
  }

  get counterNumber() {
    return this.counterForm.get('counterNumber');
  }

  get status() {
    return this.counterForm.get('status');
  }

  get date() {
    return this.counterForm.get('date');
  }

  get ppkw() {
    return this.counterForm.get('ppkw');
  }

  get basicPrice() {
    return this.counterForm.get('basicPrice');
  }

  counterForm = this.formBuilder.group({
    counterNumber: [
      '',
      [
        Validators.required,
        //Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    status: [
      '',
      [
        Validators.required,
        //Validators.minLength(8),
        //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]
    ],
    date: [
      '',
      [
        Validators.required,
        //Validators.minLength(8),
        //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]
    ],
    ppkw: [
      '',
      [
        Validators.required,
        //Validators.minLength(8),
        //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]
    ],
    basicPrice: [
      '',
      [
        Validators.required,
        //Validators.minLength(8),
        //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ]
    ],
  });

  errorMessages = {
    counterNumber: [
      { type: 'required', message: 'required' },
    ],
    status: [
      { type: 'required', message: 'required' },
    ],
    date: [
      { type: 'required', message: 'required' },
    ],
    ppkw: [
      { type: 'required', message: 'required' },
    ],
    basicPrice: [
      { type: 'required', message: 'required' },
    ]
  }

  submit(){
    this.isLoading = true;
    let counter = {
      'counterNumber': this.counterForm.value.counterNumber,
      'status': this.counterForm.value.status,
      'date': this.counterForm.value.date,
      'ppkw': this.counterForm.value.ppkw,
      'basicPrice': this.counterForm.value.basicPrice
    };
    //let today = new Date();

    this.storage.set('counters', counter).then(() => {
      this.isLoading = false;
      this.isSent = true;
    });
  }

}