import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolumeButtonComponent } from './volume-button.component';

describe('VolumeButtonComponent', () => {
  let component: VolumeButtonComponent;
  let fixture: ComponentFixture<VolumeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolumeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
