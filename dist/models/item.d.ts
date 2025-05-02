import { ClassRecord } from "./character";
import { StatRecord } from "./stat";
export interface Item {
    id: string;
    name: string;
    description: string;
    stats: StatRecord;
    class: ClassRecord;
    spellId?: number;
    icon: string;
}
