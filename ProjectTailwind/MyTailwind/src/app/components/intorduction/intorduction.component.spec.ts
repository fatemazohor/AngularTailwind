import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntorductionComponent } from './intorduction.component';

describe('IntorductionComponent', () => {
  let component: IntorductionComponent;
  let fixture: ComponentFixture<IntorductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntorductionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntorductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
