import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayInputBindingComponent } from './two-way-input-binding.component';

describe('TwoWayInputBindingComponent', () => {
  let component: TwoWayInputBindingComponent;
  let fixture: ComponentFixture<TwoWayInputBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoWayInputBindingComponent]
    });
    fixture = TestBed.createComponent(TwoWayInputBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
