import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusAspekComponent } from './hapus-aspek.component';

describe('HapusAspekComponent', () => {
  let component: HapusAspekComponent;
  let fixture: ComponentFixture<HapusAspekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapusAspekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusAspekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
