import { StatRecord } from "./stat";
export interface Item {
    name: string;
    description: string;
    stats?: Partial<StatRecord>;
    spellId?: number;
    icon: string;
}
