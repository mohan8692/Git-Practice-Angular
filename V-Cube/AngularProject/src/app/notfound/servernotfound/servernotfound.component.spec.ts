import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServernotfoundComponent } from './servernotfound.component';

describe('ServernotfoundComponent', () => {
  let component: ServernotfoundComponent;
  let fixture: ComponentFixture<ServernotfoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServernotfoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServernotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
