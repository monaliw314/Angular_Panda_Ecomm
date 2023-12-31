import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent implements OnInit {  
  constructor(private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private _apiService : ApiService) {}

  public addItemForm! : FormGroup

  ngOnInit(){
    this.createAddItemForm();
  }
  private createAddItemForm(){
    this.addItemForm = this.formBuilder.group({
      title             : ['', Validators.required],
      desc              : ['', Validators.required],
      price             : ['', Validators.required],
      image             : [''],
      category          : ['', Validators.required],
    });
  }
  submitDetails(){
    console.log(this.addItemForm.value);
    const data = JSON.stringify(this.addItemForm.value);
    this._apiService.postProduct(data).subscribe((data)=>{
      console.log('Product added successfully:', data);
    })
  }
  closeModal(){
    this.modalService.hide();
  }
}
