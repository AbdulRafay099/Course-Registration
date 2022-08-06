import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDifficultyComponent } from './display-difficulty.component';

describe('DisplayDifficultyComponent', () => {
  let component: DisplayDifficultyComponent;
  let fixture: ComponentFixture<DisplayDifficultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDifficultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDifficultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
