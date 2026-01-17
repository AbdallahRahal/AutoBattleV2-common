import { Item } from "./item";
import { StatAllocationPointDistribution, StatKey, StatRecord } from "./stat";

export enum ClassName {
    Arcanist = "Arcanist",
    Scout = "Scout",
    Guard = "Guard",
    Invoker = "Invoker",
    Doppelganger = "Doppelganger",
    Vampire = "Vampire",
    Enchantress = "Enchantress",
    Lycan = "Lycan",
}

export const defaultCharInitialClass: ClassRecord = Object.values(ClassName).reduce((acc: ClassRecord, cls: ClassName) => {
    acc[cls] = 0;
    return acc;
}, {} as ClassRecord);

export interface SkinModel {
    name: string,
    stats: Partial<StatRecord>
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
    relicSlot1?: Item;
    relicSlot2?: Item;
    relicSlot3?: Item;
    relicSlot4?: Item;
    relicInventory: Item[]; // Array de spellId

    statAllocationPoint: number
    statAllocationPointDistribution: StatAllocationPointDistribution

    classAllocationPoint: number
    classAllocationPointDistribution: ClassAllocationPointDistribution


    procDuelCount: number
    procDuelWin: number

    dailyDuelCount: number
    dailyDuelWin: number

    itemReroll: number

    figherType: 'Player' | 'Boss' | 'Minion';

    teamId: string | null
    lastTargettedDuel: number
    lastMerchantFight: number
    lastDefiFight: number
    eloRating: number
}


export type ClassAllocationPointDistribution = Record<ClassName, number>;