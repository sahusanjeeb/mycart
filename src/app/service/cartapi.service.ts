import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService {

  cartDetailList:any = [];
  productList= new BehaviorSubject<any>([]);
  constructor(private http:HttpClient) { }

  getProductData(){
    return this.productList.asObservable();
  }
  //Set Product Data
  setProduct(product:any){
    this.cartDetailList.push(...product);
    this.productList.next(product);
  }
  
  // Add product to the Cart 
  addToCart(product:any){
    let exist = this.productList.value.find((item:any)=>{
      return item.id === product.id
    });

    if(exist){
      exist.quantity++
    }
    else{
      this.cartDetailList.push(product);
      this.productList.next(this.cartDetailList);
    }
  }

  //Remove Carts Data by one
  removeCartData(product:any){
    this.cartDetailList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartDetailList.splice(index,1);
      }
    })
    this.productList.next(this.cartDetailList)
  }

}

function product(product: any) {
  throw new Error('Function not implemented.');
}

