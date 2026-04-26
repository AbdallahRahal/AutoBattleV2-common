import { AdventureItem } from "./adventureItem";
import { Character } from "./character";
import { FightTeam } from "./fight";
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
    teamMembers: Character[];
    isLooping: boolean;
}
export interface AdventureRecapContribution {
    characterId: string;
    characterName: string;
    levelsWon: number;
}
/** Niveaux d'aventure qui déclenchent un choix d'item classique. */
export declare const ADVENTURE_ITEM_CHOICE_LEVELS: number[];
/** Feature flag : mettre à true pour activer les items d'aventure classiques. */
export declare const ADVENTURE_CLASSIC_ITEMS_ENABLED = false;
export interface AdventureRecapResponse {
    hasNewContent: boolean;
    contributions: AdventureRecapContribution[];
    myNewItems: AdventureItem[];
    totalNewLevels: number;
}
