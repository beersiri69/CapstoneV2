import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week03Component } from './week03.component';

describe('Week03Component', () => {
  let component: Week03Component;
  let fixture: ComponentFixture<Week03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
