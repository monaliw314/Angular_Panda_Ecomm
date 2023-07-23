import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { SharedService } from '../shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.scss']
})
export class NewArrivalsComponent {
  Products :any =[];
  category : string ='New_Arrival';
  productImage = 'assets/panda_logo_.png';
  constructor(private _apiService :ApiService,private _sharedService : SharedService,
    private modalService: BsModalService,){}

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
