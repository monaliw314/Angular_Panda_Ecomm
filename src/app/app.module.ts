import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatTabsModule} from '@angular/material/tabs';
import { kitchenItemsComponent } from './kitchen-items/kitchen-items.component';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { DecorItemsComponent } from './decor-items/decor-items.component';
import { AddItemsComponent } from './add-items/add-items.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditItemComponent } from './edit-item/edit-item.component';
import { LoginComponent } from './login/login.component';
import { RoleDirective } from './role.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    kitchenItemsComponent,
    NewArrivalsComponent,
    DecorItemsComponent,
    AddItemsComponent,
    ProductDetailsComponent,
    EditItemComponent,
    LoginComponent,
    RoleDirective,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    MatTabsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule
  ],

  exports:[RoleDirective],
  providers: [BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
