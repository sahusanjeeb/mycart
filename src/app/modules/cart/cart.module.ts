import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const proRoutes =[
  {path:'', children:[
    {path:'', component:CartComponent},
    {path:'payment', component:PaymentComponent}
  ]}
]

@NgModule({
  declarations: [
    CartComponent,
    PaymentComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(proRoutes),
  ]
})
export class CartModule { constructor(){ console.log("cart module");}}
