import { FightTeam, Fight } from "./fight";
export type UserRaidTimelineEntry = {
    type: "BUILD";
    raidLevel: number;
    team: FightTeam;
    scheduledAt: string;
    dayOfWeek: string;
} | {
    type: "FIGHT";
    raidLevel: number;
    fight: Fight;
    scheduledAt: string;
    dayOfWeek: string;
};
