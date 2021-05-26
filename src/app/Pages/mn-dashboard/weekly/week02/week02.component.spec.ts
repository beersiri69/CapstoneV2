import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Week02Component } from './week02.component';

describe('Week02Component', () => {
  let component: Week02Component;
  let fixture: ComponentFixture<Week02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Week02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Week02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
