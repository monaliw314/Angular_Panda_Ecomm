import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorItemsComponent } from './decor-items.component';

describe('DecorItemsComponent', () => {
  let component: DecorItemsComponent;
  let fixture: ComponentFixture<DecorItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecorItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecorItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
