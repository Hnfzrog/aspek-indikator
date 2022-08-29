import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusDataSatuanComponent } from './hapus-data-satuan.component';

describe('HapusDataSatuanComponent', () => {
  let component: HapusDataSatuanComponent;
  let fixture: ComponentFixture<HapusDataSatuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapusDataSatuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusDataSatuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
