import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = 'http://localhost:3000/users'; 
  constructor(private http:HttpClient) { }
  getProduct(){
    return this.http.get(this.url).pipe(map((res:any)=>{
      return res;
    }))
  }
}
