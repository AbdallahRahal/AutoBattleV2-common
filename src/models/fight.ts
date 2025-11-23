import { Character } from "./character";
import { CombatLog } from "./fightLog";

export type FightType = 'TARGETTEDDUEL' | 'DAILYDUEL' | 'PROCDUEL' | 'RAID' | "TOURNAMENT" | "MERCHANTFIGHT" | "DEFI";

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
    raidLevel?: number
    fightLog?: { dateTime: number, combatLog: CombatLog }[]
    type: FightType;

}

export interface FightTeam {
    teamId: string,
    members: Character[];
}