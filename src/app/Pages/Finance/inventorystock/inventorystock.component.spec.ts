import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventorystockComponent } from './inventorystock.component';

describe('InventorystockComponent', () => {
  let component: InventorystockComponent;
  let fixture: ComponentFixture<InventorystockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventorystockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventorystockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
