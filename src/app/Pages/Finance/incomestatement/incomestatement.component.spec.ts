import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomestatementComponent } from './incomestatement.component';

describe('IncomestatementComponent', () => {
  let component: IncomestatementComponent;
  let fixture: ComponentFixture<IncomestatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomestatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomestatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
