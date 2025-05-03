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


export function getInitialAndItemsClass(character: Character): ClassRecord {
    const finalClass: ClassRecord = { ...character.baseClass };
    console.log("base classe = ", finalClass)
    console.log("items 1 = ", character.items[0])

    for (const item of character.items) {
        (Object.keys(finalClass) as ClassName[]).forEach((key) => {
            const itemStatValue = item.class[key] ?? 0;
            finalClass[key] += itemStatValue;
        });
    }

    return finalClass;
}

export function getInitialAndItemsStat(character: Character): StatRecord {
    const finalStats: StatRecord = { ...character.baseStats };

    for (const item of character.items) {
        (Object.keys(finalStats) as StatKey[]).forEach((key) => {
            const itemStatValue = item.stats[key] ?? 0;
            finalStats[key] += itemStatValue;
        });
    }

    return finalStats;
}