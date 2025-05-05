import { Item } from "./item";
import { StatRecord } from "./stat";
export declare enum ClassName {
    Arcanist = "Arcanist",
    Scout = "Scout",
    Guard = "Guard"
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
    computedStats: StatRecord;
    computedClass: ClassRecord;
    items: Item[];
    modelName: string;
    duelsLeft: number;
}
