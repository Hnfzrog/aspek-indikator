import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAspekComponent } from './edit-aspek.component';

describe('EditAspekComponent', () => {
  let component: EditAspekComponent;
  let fixture: ComponentFixture<EditAspekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAspekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAspekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
