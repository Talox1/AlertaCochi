import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterBussinessComponent } from './register-bussiness.component';

describe('RegisterBussinessComponent', () => {
  let component: RegisterBussinessComponent;
  let fixture: ComponentFixture<RegisterBussinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterBussinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBussinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
