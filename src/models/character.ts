import { Item } from "./item";
import { StatRecord } from "./stat";

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

    stats: StatRecord;
    class: ClassRecord;
    items: Item[];

    modelName: string;
    duelsLeft: number;
}


export function getInitialAndItemsClass(initialClass: ClassRecord, items: Item[]): ClassRecord {
    const finalClass: ClassRecord = { ...initialClass };

    for (const item of items) {
        (Object.keys(finalClass) as ClassName[]).forEach((key) => {
            const itemStatValue = item.class[key] ?? 0;
            finalClass[key] += itemStatValue;
        });
    }

    return finalClass;
}