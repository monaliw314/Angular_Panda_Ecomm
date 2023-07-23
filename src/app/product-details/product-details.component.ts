import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{
  modalRef?: BsModalRef;
  productImage = 'assets/panda_logo_.png';
  productReturn = 'assets/product_return.png';
  constructor(private _sharedService : SharedService,private modalService: BsModalService){}
  product : any = {};

  ngOnInit(){
    this.getProductDetails();
  }

  getProductDetails(){
    this.product = this._sharedService.getData();

  }
  closeModal(){
   this.modalService.hide();
  }

}
