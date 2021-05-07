import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MnDashboardComponent } from './mn-dashboard.component';

describe('MnDashboardComponent', () => {
  let component: MnDashboardComponent;
  let fixture: ComponentFixture<MnDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MnDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MnDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
