import { Component } from '@angular/core';

@Component({
  selector: 'app-score-breakdown-table',
  imports: [],
  templateUrl: './score-breakdown-table.component.html',
  styleUrl: './score-breakdown-table.component.css',
  host: { hostID: crypto.randomUUID().toString() },
})
export class ScoreBreakdownTableComponent {}
