import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultcomponentComponent } from './defaultcomponent.component';

describe('DefaultcomponentComponent', () => {
  let component: DefaultcomponentComponent;
  let fixture: ComponentFixture<DefaultcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
