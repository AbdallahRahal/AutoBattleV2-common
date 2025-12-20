// packages/common/models/relic.ts

export enum RelicLineRarity {
    COMMON = "COMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    LEGENDARY = "LEGENDARY",
}

export interface RelicSlot {
    spellId?: number;
    isUnlocked: boolean; // Calculé à la volée, pas en base
}

export interface Relic {
    id: string;
    slots: RelicSlot[]; // 4 slots
    inventory: number[]; // Array de spellId
    createdAt: string;
}
