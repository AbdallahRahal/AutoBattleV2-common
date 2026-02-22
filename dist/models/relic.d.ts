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
