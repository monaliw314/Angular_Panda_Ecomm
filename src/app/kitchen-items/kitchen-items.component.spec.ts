import { ComponentFixture, TestBed } from '@angular/core/testing';

import {kitchenItemsComponent } from './kitchen-items.component';

describe('DisplayItemsComponent', () => {
  let component: kitchenItemsComponent;
  let fixture: ComponentFixture<kitchenItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ kitchenItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(kitchenItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
