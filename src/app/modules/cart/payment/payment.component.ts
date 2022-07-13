import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  billingForm: FormGroup = new FormGroup({}); 
  paymentForm: FormGroup = new FormGroup({});  
  totalPrice:any;
  

  constructor(private share:SharedService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.totalPrice=this.share.getTotal();

    this.billingForm = this.fb.group({
      fname: ['',[Validators.required]],
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email:  ['',[Validators.required,Validators.email]],
      area:  ['',[Validators.required]],
      landmark:  ['',[Validators.required]],
      pin:  ['',[Validators.required] ],
      city:  ['',[Validators.required]],
      state:  ['',[Validators.required]]
  });

  this.paymentForm = this.fb.group({
    name: ['',[Validators.required]],
    cardNumber: ['',[Validators.required]],
    cardExpiry:['',[Validators.required]],
    cvc:['',[Validators.required]]
  })
  }

  get f(){  
    return this.billingForm.controls;  
  }  
  get p(){
    return this.paymentForm.controls;
  }

  


billingUser(){
  console.log(this.billingForm.value);
  console.log(this.paymentForm.value);
}
}
