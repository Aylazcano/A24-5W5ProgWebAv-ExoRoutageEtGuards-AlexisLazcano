import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerreDEauComponent } from './verre-deau.component';

describe('VerreDEauComponent', () => {
  let component: VerreDEauComponent;
  let fixture: ComponentFixture<VerreDEauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerreDEauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerreDEauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
