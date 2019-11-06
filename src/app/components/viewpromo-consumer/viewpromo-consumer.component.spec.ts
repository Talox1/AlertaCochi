import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpromoConsumerComponent } from './viewpromo-consumer.component';

describe('ViewpromoConsumerComponent', () => {
  let component: ViewpromoConsumerComponent;
  let fixture: ComponentFixture<ViewpromoConsumerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewpromoConsumerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpromoConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
