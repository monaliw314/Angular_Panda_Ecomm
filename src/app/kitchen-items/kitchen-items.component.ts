import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {SharedService} from '../shared.service';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ProductDetailsComponent } from '../product-details/product-details.component';
@Component({
  selector: 'app-kitchen-items',
  templateUrl: './kitchen-items.component.html',
  styleUrls: ['./kitchen-items.component.scss']
})
export class kitchenItemsComponent implements OnInit {

  Products :any =[];
  category : string ='Kitchen_&_Dining';
  productImage = 'assets/panda_logo_.png';
  constructor(private _apiService : ApiService, 
    private _sharedService : SharedService,
    private modalService: BsModalService,
    private _router : Router){}

  ngOnInit(){
    this._apiService.getProductByCategory(this.category).subscribe((data:any) =>{
      this.Products = data;
    })
  }

  public OpenDetailsComponent(data:any){
    console.log(data);
    this._sharedService.sendData(data);
  //  this._router.navigate(['/detailsComponent']);
   this.modalService.show(ProductDetailsComponent);
  }


}
