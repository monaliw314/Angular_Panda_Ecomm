import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit{
  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private _apiService : ApiService) {}
    data: any={};
    public editItemForm! : FormGroup

  ngOnInit(){
    console.log(this.data);
    this.createAddItemForm();
    this.patchValuesToForm();
  }
  private createAddItemForm(){
    this.editItemForm = this.formBuilder.group({
      title             : ['', Validators.required],
      desc              : ['', Validators.required],
      price             : ['', Validators.required],
      image             : [''],
      category          : ['', Validators.required],
    });
  }

  patchValuesToForm(){
    this.editItemForm.patchValue({
      title             : this.data.title,
      desc              : this.data.desc,
      price             : this.data.price,
      image             : '',
      category          : this.data.category,
    })
  }

  UpdateDetails(item:any){
    this._apiService.updateProduct(this.data._id,item).subscribe((data)=>{
      console.log("product updated successfully");
    })
  }

  closeModal(){
    this.modalService.hide();
  }

}
