import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchildinteractionsComponent } from './parentchildinteractions.component';

describe('ParentchildinteractionsComponent', () => {
  let component: ParentchildinteractionsComponent;
  let fixture: ComponentFixture<ParentchildinteractionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentchildinteractionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentchildinteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
