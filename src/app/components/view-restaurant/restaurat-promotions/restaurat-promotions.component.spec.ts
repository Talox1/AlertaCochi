import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauratPromotionsComponent } from './restaurat-promotions.component';

describe('RestauratPromotionsComponent', () => {
  let component: RestauratPromotionsComponent;
  let fixture: ComponentFixture<RestauratPromotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauratPromotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauratPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
