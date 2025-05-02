import { StatRecord } from "./stat";

export interface Item {
    updatedAt?: Date;
    name: string,
    description: string,
    level: number,
    stats?: Partial<StatRecord>,
    spellId?: number
    icon: string
}