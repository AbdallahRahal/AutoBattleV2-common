import { Item } from "./item";
import { StatKey, StatRecord } from "./stat";

export enum ClassName {
    Arcanist = "Arcanist",
    Scout = "Scout",
    Guard = "Guard",
}

export type ClassRecord = Record<ClassName, number>;

export interface Character {
    id: string;

    ownerId: string;

    name: string;
    level: number;
    experience: number;


    baseStats: StatRecord;
    baseClass: ClassRecord;


    items: Item[];

    modelName: string;
    duelsLeft: number;
}


export function getInitialAndItemsClass(character: Character, items: Item[]): ClassRecord {
    const finalClass: ClassRecord = { ...character.baseClass };
    console.log("base classe = ", finalClass)

    for (const item of items) {
        (Object.keys(finalClass) as ClassName[]).forEach((key) => {
            const itemStatValue = item.class[key] ?? 0;
            finalClass[key] += itemStatValue;
        });
    }

    return finalClass;
}

export function getInitialAndItemsStat(character: Character, items: Item[]): StatRecord {
    const finalStats: StatRecord = { ...character.baseStats };

    for (const item of items) {
        (Object.keys(finalStats) as StatKey[]).forEach((key) => {
            const itemStatValue = item.stats[key] ?? 0;
            finalStats[key] += itemStatValue;
        });
    }

    return finalStats;
}