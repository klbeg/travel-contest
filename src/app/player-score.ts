export interface PlayerScore {
  playerId: number;
  playerName: string;
  playerScore: number;
}

export interface TripScoreBreakdown {
  destination: string;
  playerId: number;
  pointsPerDay: number;
  duration: number;
  tripTotal: number;
}
