import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataSatuanComponent } from './add-data-satuan.component';

describe('AddDataSatuanComponent', () => {
  let component: AddDataSatuanComponent;
  let fixture: ComponentFixture<AddDataSatuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDataSatuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataSatuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
