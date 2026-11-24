import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionChipComponent } from './region-chip.component';

describe('RegionChipComponent', () => {
  let component: RegionChipComponent;
  let fixture: ComponentFixture<RegionChipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegionChipComponent]
    });
    fixture = TestBed.createComponent(RegionChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
