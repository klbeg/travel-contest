import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreBreakdownTableComponent } from './score-breakdown-table.component';

describe('ScoreBreakdownTableComponent', () => {
  let component: ScoreBreakdownTableComponent;
  let fixture: ComponentFixture<ScoreBreakdownTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreBreakdownTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoreBreakdownTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
