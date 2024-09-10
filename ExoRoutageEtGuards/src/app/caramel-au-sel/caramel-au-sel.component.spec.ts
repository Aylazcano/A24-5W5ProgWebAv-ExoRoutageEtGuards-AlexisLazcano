import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaramelAuSelComponent } from './caramel-au-sel.component';

describe('CaramelAuSelComponent', () => {
  let component: CaramelAuSelComponent;
  let fixture: ComponentFixture<CaramelAuSelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaramelAuSelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaramelAuSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
