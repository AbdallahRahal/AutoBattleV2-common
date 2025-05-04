import { Character } from "./character";
export interface Fight {
    id: string;
    status: 'PENDING' | 'ACTIVE' | 'FINISH' | 'FAILED';
    teams: FightTeam[];
    fightToken: string;
    ip: string;
    port: number;
    winnerTeamId: string;
    containerId: string;
    fightTime: number;
    createdAt: Date;
}
export interface FightTeam {
    teamId: string;
    members: Character[];
}
