import { ClassRecord } from "./character";
import { StatRecord } from "./stat";
export interface Item {
    name: string;
    description: string;
    stats: StatRecord;
    class: ClassRecord;
    spellId?: number;
    icon: string;
}
