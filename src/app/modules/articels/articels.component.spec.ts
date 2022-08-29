import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticelsComponent } from './articels.component';

describe('ArticelsComponent', () => {
  let component: ArticelsComponent;
  let fixture: ComponentFixture<ArticelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
