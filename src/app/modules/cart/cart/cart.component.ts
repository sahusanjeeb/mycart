import { Component, OnInit } from '@angular/core';
import { CartapiService } from 'src/app/service/cartapi.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:any=[];
  total :number=0;
  constructor(private cartApi:CartapiService, private share:SharedService ) { }

  ngOnInit(): void {
    this.cartApi.getProductData().subscribe((res)=>{
      this.products=res;    
      if(this.products) this.getTotal(this.products);
    })
  }
 
  removeProduct(item:any){
    this.cartApi.removeCartData(item);
  }

  validateQty(event:any, i:number){
    const quantity = +event.target.value;
    if(quantity < 1){
      event.target.value = this.products[i].quantity;
      return;
    }
    this.QtyUpdate(quantity, i)
  }

  private QtyUpdate(quantity:number, i:number){
    this.products[i].quantity = quantity;
    this.getTotal(this.products);
  }

  getTotal(data:any){
    let subTotal = 0;
    for(const item of data){
      subTotal += (item.price * item.quantity)
    } 
    this.total = subTotal;
    this.share.setTotal(this.total);
  }

}
