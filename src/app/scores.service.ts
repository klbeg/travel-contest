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
      playerName: 'Kevin',
      playerScore: 1400,
    },
    {
      playerId: 2,
      playerName: 'Halsey',
      playerScore: 1200,
    },
    {
      playerId: 3,
      playerName: 'Tanner',
      playerScore: 900,
    },
    {
      playerId: 1,
      playerName: 'Janet',
      playerScore: 750,
    },
  ];
  mockScoreBreakdown: TripScoreBreakdown[] = [
    {
      destination: 'San Paulo, BR',
      playerId: 1,
      pointsPerDay: 12,
      duration: 7,
      tripTotal: 84,
    },
    {
      destination: 'San Diego, CA',
      playerId: 1,
      pointsPerDay: 8,
      duration: 20,
      tripTotal: 160,
    },
    {
      destination: 'Saginaw, MI',
      playerId: 1,
      pointsPerDay: 3,
      duration: 3,
      tripTotal: 9,
    },
    {
      destination: 'San Diego, CA',
      playerId: 2,
      pointsPerDay: 8,
      duration: 20,
      tripTotal: 160,
    },
    {
      destination: 'Sydney, AU',
      playerId: 2,
      pointsPerDay: 18,
      duration: 30,
      tripTotal: 540,
    },
    {
      destination: 'Saginaw, MI',
      playerId: 3,
      pointsPerDay: 3,
      duration: 3,
      tripTotal: 9,
    },
    {
      destination: 'San Diego, CA',
      playerId: 3,
      pointsPerDay: 8,
      duration: 20,
      tripTotal: 160,
    },
    {
      destination: 'Sydney, AU',
      playerId: 4,
      pointsPerDay: 18,
      duration: 30,
      tripTotal: 540,
    },
    {
      destination: 'San Diego, CA',
      playerId: 4,
      pointsPerDay: 8,
      duration: 20,
      tripTotal: 160,
    },
  ];

  async getAllScores(): Promise<PlayerScore[]> {
    return this.mockPlayerScores;
  }

  async getPlayerScoreBreakdown(id: number): Promise<TripScoreBreakdown[]> {
    return this.mockScoreBreakdown.filter(
      (score: any) => score.playerId === id
    );
  }

  constructor() {}
}
