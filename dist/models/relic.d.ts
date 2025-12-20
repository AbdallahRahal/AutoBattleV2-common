export declare enum RelicLineRarity {
    COMMON = "COMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    LEGENDARY = "LEGENDARY"
}
export interface RelicSlot {
    spellId?: number;
    isUnlocked: boolean;
}
export interface Relic {
    id: string;
    slots: RelicSlot[];
    inventory: number[];
    createdAt: string;
}
