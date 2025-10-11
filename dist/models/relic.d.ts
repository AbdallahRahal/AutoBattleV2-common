import { ClassRecord } from "./character";
import { Item } from "./item";
import { StatRecord } from "./stat";
export interface Relic {
    id: string;
    stats: StatRecord;
    class: ClassRecord;
    gold: number;
    reroll: number;
    statPoint: number;
    classPoint: number;
    item: Item[];
    createdAt: string;
    updatedAt: string;
}
