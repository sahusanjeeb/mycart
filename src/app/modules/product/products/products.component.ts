import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartapiService } from 'src/app/service/cartapi.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList:any;
  constructor(private api:ApiService, private cartApi:CartapiService, private toast:NgToastService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1, total:a.price})
      });
    })
  }


  addtoCart(item:any){
    this.cartApi.addToCart(item);
    console.log(item);
    this.toast.success({detail:"success", summary:"Added to Cart", duration:800})
  }

} 
