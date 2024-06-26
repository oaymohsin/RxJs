import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfAndFromComponent } from './of-and-from.component';

describe('OfAndFromComponent', () => {
  let component: OfAndFromComponent;
  let fixture: ComponentFixture<OfAndFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OfAndFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfAndFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
