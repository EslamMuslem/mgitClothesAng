import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AButtonsComponent } from './a-buttons.component';

describe('AButtonsComponent', () => {
  let component: AButtonsComponent;
  let fixture: ComponentFixture<AButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
