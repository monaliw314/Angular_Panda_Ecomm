import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { AddItemsComponent } from '../add-items/add-items.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,MatToolbarModule,MatInputModule,MatIconModule,MatButtonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  bsModalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}
  imagePath =  'assets/web_logo.png';

  callAddItemComponent(){
    this.bsModalRef = this.modalService.show(AddItemsComponent);
  }
}
