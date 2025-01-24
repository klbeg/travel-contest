import { Component } from '@angular/core';
import { ScoreBreakdownTableComponent } from '../score-breakdown-table/score-breakdown-table.component';

@Component({
  selector: 'app-score-breakdown',
  imports: [ScoreBreakdownTableComponent],
  templateUrl: './score-breakdown.component.html',
  styleUrl: './score-breakdown.component.css',
  host: { hostID: crypto.randomUUID().toString() },
})
export class ScoreBreakdownComponent {}
