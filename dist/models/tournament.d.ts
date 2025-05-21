import { Fight, FightTeam } from "./fight";
export interface Tournament {
    id: string;
    status: 'ACTIVE' | 'FINISH' | 'FAILED';
    rounds: TournamentRound[];
    allFightTeams: FightTeam[];
    aliveFightTeams: FightTeam[];
    winnerTeamId: string;
}
export interface TournamentRound {
    teams: string[];
    fights: Fight;
}
