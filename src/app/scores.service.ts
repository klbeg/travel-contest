import { Injectable } from '@angular/core';
import { PlayerScore } from './player-score';

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

  async getAllScores(): Promise<PlayerScore[]> {
    return this.mockPlayerScores;
  }

  constructor() {}
}
