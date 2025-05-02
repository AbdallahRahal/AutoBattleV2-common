import { Item } from "./item";
import { StatRecord } from "./stat";

export enum ClassName {
    Arcanist = "Arcanist",
    Scout = "Scout",
    Guard = "Guard",
}
export type ClassNameRecord = Record<ClassName, number>;

export interface Character {
    id: string;

    ownerId: string;

    name: string;
    level: number;
    experience: number;

    stats: StatRecord;
    classPoints: ClassNameRecord; // Exemple → { Mage: 3, Warrior: 1 }
    items: Item[];

    modelName: string;
    duelsLeft: number;
}