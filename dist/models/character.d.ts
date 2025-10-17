import { Item } from "./item";
import { Relic } from "./relic";
import { StatAllocationPointDistribution, StatRecord } from "./stat";
export declare enum ClassName {
    Arcanist = "Arcanist",
    Scout = "Scout",
    Guard = "Guard",
    Invoker = "Invoker",
    Doppelganger = "Doppelganger"
}
export interface SkinModel {
    name: string;
    stats: Partial<StatRecord>;
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
    gold: number;
    baseStats: StatRecord;
    baseClass: ClassRecord;
    computedStats: StatRecord;
    computedClass: ClassRecord;
    items: Item[];
    weapon?: Item;
    itemChoice: Record<string, Item[]>;
    skinModel: SkinModel;
    duelsLeft: number;
    relic?: Relic;
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
    lastMerchantFight: number;
    eloRating: number;
}
export type ClassAllocationPointDistribution = Record<ClassName, number>;
