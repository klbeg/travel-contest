export interface PlayerScore {
  playerId: number;
  playerName: string;
  playerScore: number;
}

export interface TripScoreBreakdown {
  location: string;
  pointsPerDay: number;
  duration: number;
  tripTotal: number;
}
