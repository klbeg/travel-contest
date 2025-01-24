import { Routes } from '@angular/router';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { ScoreBreakdownComponent } from './score-breakdown/score-breakdown.component';

export const routes: Routes = [
  {
    path: 'score-breakdown/:id',
    component: ScoreBreakdownComponent,
  },
  {
    path: '',
    component: LeaderboardComponent,
  },
  {
    path: '**',
    // not sure what component should be rendered here
    // sort out later
    component: LeaderboardComponent,
  },
];
