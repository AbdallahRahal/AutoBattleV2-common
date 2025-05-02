import { Item } from "./item";
import { StatRecord } from "./stat";

export enum ClassName {
    Arcanist = "Arcanist",
    Scout = "Scout",
    Guard = "Guard",
}
export interface Character {
    id: string;

    ownerId: string;

    name: string;
    level: number;
    experience: number;

    stats: StatRecord;
    classPoints: Partial<Record<ClassName, number>>; // Exemple → { Mage: 3, Warrior: 1 }
    equippedItems: Item[];

    modelName: string;
    duelsLeft: number;
}