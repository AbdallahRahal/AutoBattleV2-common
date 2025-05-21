import { Character } from "./character";
import { Fight, FightTeam } from "./fight";
import { CombatLog } from "./fightLog";

export interface Tournament {
    id: string;
    status: 'ACTIVE' | 'FINISH' | 'FAILED';
    rounds: TournamentRound[],
    allFightTeams: FightTeam[],
    aliveFightTeams: FightTeam[],
    winnerTeamId: string
}

export interface TournamentRound {
    teams: string[];
    fights: Fight;
}