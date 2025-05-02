import { Item } from "./item";
import { StatRecord } from "./stat";
export declare enum ClassName {
    Elementalist = "Elementalist",
    Scout = "Scout",
    Guard = "Guard"
}
export interface Character {
    id: string;
    ownerId: string;
    name: string;
    level: number;
    experience: number;
    stats: StatRecord;
    classPoints: Partial<Record<ClassName, number>>;
    equippedItems: Item[];
    modelName: string;
    duelsLeft: number;
}
