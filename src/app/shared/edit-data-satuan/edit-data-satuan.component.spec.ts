import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataSatuanComponent } from './edit-data-satuan.component';

describe('EditDataSatuanComponent', () => {
  let component: EditDataSatuanComponent;
  let fixture: ComponentFixture<EditDataSatuanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDataSatuanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataSatuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
