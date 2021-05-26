import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week04Component } from './week04.component';

describe('Week04Component', () => {
  let component: Week04Component;
  let fixture: ComponentFixture<Week04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
