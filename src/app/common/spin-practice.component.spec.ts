import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinPracticeComponent } from './spin-practice.component';

describe('SpinPracticeComponent', () => {
  let component: SpinPracticeComponent;
  let fixture: ComponentFixture<SpinPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
