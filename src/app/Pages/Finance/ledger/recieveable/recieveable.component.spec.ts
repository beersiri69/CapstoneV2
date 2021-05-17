import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecieveableComponent } from './recieveable.component';

describe('RecieveableComponent', () => {
  let component: RecieveableComponent;
  let fixture: ComponentFixture<RecieveableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecieveableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecieveableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
