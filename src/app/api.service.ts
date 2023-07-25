import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpErrorResponse, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client : HttpClient) { }

  REST_API : string ='http://localhost:8000/';
  httpHeaders = new HttpHeaders().set('Content-type','application/json');

  getAllProducts(){
    return this.client.get(this.REST_API + 'get-all-products');
  }
  getProductByCategory(category:any){
    return this.client.get(this.REST_API + 'get-product/'+category);
  }
  getProductById(id:any){
    return this.client.get(this.REST_API + 'get-product-by-id/'+id)
  }

  getProductBy_Id_Category(id:any, category: any){
    let params = new HttpParams();
    if (id) {
      params = params.set('id', id);
    }
    if (category) {
      params = params.set('category', category);
    }
    return this.client.get(this.REST_API+'get-item?',{params})
  }

  postProduct(data:any){
    return this.client.post(this.REST_API+'post-product',data,{headers:this.httpHeaders});
  }

  deleteProduct(id:any){
    return this.client.delete(this.REST_API+'delete-product/'+id);
  }

  updateProduct(id:any,data:any){
    return this.client.put(this.REST_API+'update-product/'+id,data)
  }
  

}
