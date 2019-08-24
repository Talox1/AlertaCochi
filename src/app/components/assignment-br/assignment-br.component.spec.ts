import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentBRComponent } from './assignment-br.component';

describe('AssignmentBRComponent', () => {
  let component: AssignmentBRComponent;
  let fixture: ComponentFixture<AssignmentBRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentBRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentBRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
