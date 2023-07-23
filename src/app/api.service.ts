import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client : HttpClient) { }

  REST_API : string ='http://localhost:8000';
  httpHeaders = new HttpHeaders().set('Content-type','application/json');

  getAllProducts(){
    return this.client.get(`${this.REST_API}/get-all-products`);
  }
  getProductByCategory(category:any){
    return this.client.get(`${this.REST_API}/get-product/${category}`);
  }
  getProductById(id:any){
    return this.client.get(`${this.REST_API}/get-product-by-id/${id}`);
  }

}
