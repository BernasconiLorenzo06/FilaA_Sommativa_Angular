import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentedComponent } from './rented.component';

describe('RentedComponent', () => {
  let component: RentedComponent;
  let fixture: ComponentFixture<RentedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RentedComponent]
    });
    fixture = TestBed.createComponent(RentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
