import { Component, inject, OnInit } from '@angular/core';
import { ScoresService } from '../scores.service';
import { TripScoreBreakdown } from '../player-score';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-score-breakdown-table',
  imports: [CommonModule],
  templateUrl: './score-breakdown-table.component.html',
  styleUrl: './score-breakdown-table.component.css',
  host: { hostID: crypto.randomUUID().toString() },
})
export class ScoreBreakdownTableComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  scoresService: ScoresService = inject(ScoresService);
  scoreBreakdowns: TripScoreBreakdown[] = [];

  ngOnInit() {
    const playerId: number | null = Number(
      this.route.snapshot.paramMap.get('id')
    );
    if (playerId) {
      this.scoresService
        .getPlayerScoreBreakdown(playerId)
        .then(
          (scores: TripScoreBreakdown[]) => (this.scoreBreakdowns = scores)
        );
    }
  }
  constructor() {}
}
