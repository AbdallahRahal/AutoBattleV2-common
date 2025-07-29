import { ClassRecord } from "./character";
import { StatRecord } from "./stat";

export interface Item {
    id: string;
    name: string,
    description: string,

    stats: StatRecord;
    class: ClassRecord;
    isClassItem: boolean
    isWeapon: boolean
    dropable: boolean
    spellId?: number
    icon: string
}