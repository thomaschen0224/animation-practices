import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationPractice1Component } from './animation-practice-1.component';

describe('AnimationPractice1Component', () => {
  let component: AnimationPractice1Component;
  let fixture: ComponentFixture<AnimationPractice1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimationPractice1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimationPractice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
