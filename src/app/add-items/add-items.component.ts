import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.scss']
})
export class AddItemsComponent {  
  constructor(private modalService: BsModalService,private formBuilder: FormBuilder) {}
  public addItemForm!          : FormGroup

  private createAddItemForm(){
    this.addItemForm = this.formBuilder.group({
      title             : ['', Validators.required],
      desc             : ['', Validators.required],
      price             : ['', Validators.required],
      image             : [''],
      category             : ['', Validators.required],
    });
  }
  submitDetails(){

  }
  closeModal(){
    this.modalService.hide();
  }
}
