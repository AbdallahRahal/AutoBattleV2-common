import { Item } from "./item";
import { StatAllocationPointDistribution, StatRecord } from "./stat";
export declare enum ClassName {
    Arcanist = "Arcanist",
    Scout = "Scout",
    Guard = "Guard",
    Invoker = "Invoker",
    Doppelgänger = "Doppelg\u00E4nger"
}
export type ClassRecord = Record<ClassName, number>;
export interface Character {
    id: string;
    ownerId: string;
    ownerDiscordId: string;
    baseDiscordServerId: string;
    name: string;
    level: number;
    experience: number;
    baseStats: StatRecord;
    baseClass: ClassRecord;
    computedStats: StatRecord;
    computedClass: ClassRecord;
    items: Item[];
    weapon?: Item;
    itemChoice: Record<string, Item[]>;
    modelName: string;
    duelsLeft: number;
    statAllocationPoint: number;
    statAllocationPointDistribution: StatAllocationPointDistribution;
    classAllocationPoint: number;
    classAllocationPointDistribution: ClassAllocationPointDistribution;
    procDuelCount: number;
    procDuelWin: number;
    dailyDuelCount: number;
    dailyDuelWin: number;
    itemReroll: number;
    figherType: 'Player' | 'Boss' | 'Minion';
    teamId: string | null;
    lastTargettedDuel: number;
    eloRating: number;
}
export type ClassAllocationPointDistribution = Record<ClassName, number>;
