import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyV2Component } from './daily-v2.component';

describe('DailyV2Component', () => {
  let component: DailyV2Component;
  let fixture: ComponentFixture<DailyV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
