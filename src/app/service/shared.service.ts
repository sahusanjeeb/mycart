import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
total:number;
  constructor() { }
  setTotal(data:number){
    this.total=data;
  }
  getTotal(){
    return this.total;
  }
}
  