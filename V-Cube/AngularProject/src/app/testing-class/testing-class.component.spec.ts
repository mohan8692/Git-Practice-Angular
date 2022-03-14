import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingClassComponent } from './testing-class.component';

describe('TestingClassComponent', () => {
  let component: TestingClassComponent;
  let fixture: ComponentFixture<TestingClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
