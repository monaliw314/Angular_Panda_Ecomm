import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-decor-items',
  templateUrl: './decor-items.component.html',
  styleUrls: ['./decor-items.component.scss']
})
export class DecorItemsComponent {
  Products :any =[];
  category : string ='Decor';
  productImage = 'assets/panda_logo_.png';
  constructor(private _apiService :ApiService,private _sharedService : SharedService,
    private modalService: BsModalService,){}

  ngOnInit(){
    this.getDecorProducts();
  }

  getDecorProducts(){
    this._apiService.getProductBy_Id_Category(null,this.category).subscribe((data:any) =>{
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
