import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersOptionComponent } from './customers-option.component';

describe('CustomersOptionComponent', () => {
  let component: CustomersOptionComponent;
  let fixture: ComponentFixture<CustomersOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
