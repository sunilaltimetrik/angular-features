import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAccordianComponent } from './my-accordian.component';

describe('MyAccordianComponent', () => {
  let component: MyAccordianComponent;
  let fixture: ComponentFixture<MyAccordianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAccordianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
