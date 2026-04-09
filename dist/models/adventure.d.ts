import { Character } from "./character";
import { Fight, FightTeam } from "./fight";
export interface AdventureProgress {
    teamId: string;
    currentLevel: number;
    highestLevelCleared: number;
    totalFightsWon: number;
    lastFightAt: string;
}
export interface AdventureLevelConfig {
    level: number;
    isBoss: boolean;
    enemyTeam: FightTeam;
    background?: string;
}
export interface AdventureLeaderboardEntry {
    teamId: string;
    teamName: string;
    members: {
        id: string;
        name: string;
        skinModelName: string;
    }[];
    highestLevelCleared: number;
    currentLevel: number;
    totalFightsWon: number;
    lastFightAt: string;
}
export interface AdventureTimelineResponse {
    progress: AdventureProgress | null;
    nextLevel: AdventureLevelConfig | null;
    recentFights: Fight[];
    teamMembers: Character[];
}
