import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeTemplateDrivenFormComponent } from './practice-template-driven-form.component';

describe('PracticeTemplateDrivenFormComponent', () => {
  let component: PracticeTemplateDrivenFormComponent;
  let fixture: ComponentFixture<PracticeTemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeTemplateDrivenFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
