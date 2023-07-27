import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private client : HttpClient) { }
  REST_API : string ='http://localhost:8000/';
  httpHeaders = new HttpHeaders().set('Content-type','application/json');
  

  setToken(token:any){
   this.httpHeaders = this.httpHeaders.set('x-access-token',token)
   console.log(this.httpHeaders.get('x-access-token'));
  }

  getAllProducts(){
    return this.client.get(this.REST_API + 'get-all-products',{headers:this.httpHeaders});
  }
  getProductByCategory(category:any){
    return this.client.get(this.REST_API + 'get-product/'+category,{headers:this.httpHeaders});
  }
  getProductById(id:any){
    return this.client.get(this.REST_API + 'get-product-by-id/'+id,{headers:this.httpHeaders})
  }

  getProductBy_Id_Category(id:any, category: any){
    let params = new HttpParams();
    if (id) {
      params = params.set('id', id);
    }
    if (category) {
      params = params.set('category', category);
    }
    console.log()
    return this.client.get(this.REST_API+'get-item?',{params,headers:this.httpHeaders})
  }

  postProduct(data:any){
    return this.client.post(this.REST_API+'post-product',data,{headers:this.httpHeaders});
  }

  deleteProduct(id:any){
    return this.client.delete(this.REST_API+'delete-product/'+id,{headers:this.httpHeaders});
  }

  updateProduct(id:any,data:any){
    return this.client.put(this.REST_API+'update-product/'+id,data,{headers:this.httpHeaders})
  }
  
  userLogin(data:any){
    return this.client.post(this.REST_API + 'login',data,{headers:this.httpHeaders})
  }

}
