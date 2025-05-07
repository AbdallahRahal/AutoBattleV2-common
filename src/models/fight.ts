import { Character } from "./character";
import { CombatLog } from "./fightLog";

export interface Fight {
    id: string;
    status: 'PENDING' | 'ACTIVE' | 'FINISH' | 'FAILED';
    teams: FightTeam[];
    fightToken: string
    ip: string
    port: number
    winnerTeamId: string
    containerId: string
    fightTime: number
    createdAt: Date
    background: string,
    discordServerId?: string
    fightLog?: { dateTime: number, combatLog: CombatLog }[]
}

export interface FightTeam {
    teamId: string,
    members: Character[];
}