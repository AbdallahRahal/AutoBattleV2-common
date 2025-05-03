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
    stats: StatRecord;
    class: ClassRecord;
    items: Item[];
    modelName: string;
    duelsLeft: number;
}
export declare function getInitialAndItemsClass(character: Character, items: Item[]): ClassRecord;
export declare function getInitialAndItemsStat(character: Character, items: Item[]): StatRecord;
