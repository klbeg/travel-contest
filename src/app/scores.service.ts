import { Injectable } from '@angular/core';
import { PlayerScore, TripScoreBreakdown } from './player-score';

@Injectable({
  providedIn: 'root',
})
export class ScoresService {
  url = 'http://localhost:3000/scores';
  mockPlayerScores: PlayerScore[] = [
    {
      playerId: 1,
      playerName: 'Kevin Begin',
      playerScore: 1400,
    },
    {
      playerId: 2,
      playerName: 'Halsey Quinn',
      playerScore: 1200,
    },
    {
      playerId: 3,
      playerName: 'Tanner Daltsworth',
      playerScore: 900,
    },
    {
      playerId: 1,
      playerName: 'Janet Guthrie',
      playerScore: 750,
    },
  ];
  mockScoreBreakdown: TripScoreBreakdown[] = [
    {
      destination: 'San Paulo, BR',
      pointsPerDay: 12,
      duration: 7,
      tripTotal: 84,
    },
    {
      destination: 'San Diego, CA',
      pointsPerDay: 8,
      duration: 20,
      tripTotal: 160,
    },
    {
      destination: 'Saginaw, MI',
      pointsPerDay: 3,
      duration: 3,
      tripTotal: 9,
    },
    {
      destination: 'Sydney, AU',
      pointsPerDay: 18,
      duration: 30,
      tripTotal: 540,
    },
  ];

  async getAllScores(): Promise<PlayerScore[]> {
    return this.mockPlayerScores;
  }

  async getPlayerScoreBreakdown(): Promise<TripScoreBreakdown[]> {
    return this.mockScoreBreakdown;
  }

  constructor() {}
}
