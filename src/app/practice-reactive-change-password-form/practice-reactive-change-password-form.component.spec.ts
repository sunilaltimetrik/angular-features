import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeReactiveChangePasswordFormComponent } from './practice-reactive-change-password-form.component';

describe('PracticeReactiveChangePasswordFormComponent', () => {
  let component: PracticeReactiveChangePasswordFormComponent;
  let fixture: ComponentFixture<PracticeReactiveChangePasswordFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeReactiveChangePasswordFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeReactiveChangePasswordFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
