import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArabComponent } from './arab.component';

describe('ArabComponent', () => {
  let component: ArabComponent;
  let fixture: ComponentFixture<ArabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
