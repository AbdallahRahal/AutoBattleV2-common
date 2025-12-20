import { ClassName } from "./character";
import { StatKey } from "./stat";
export declare enum RelicLineType {
    STAT = "STAT",// + Stat fixe (sauf vie)
    CLASS = "CLASS",// + 1 point de classe (fixe)
    GOLD = "GOLD",// + Gold
    REROLL = "REROLL",// + Relance
    STAT_POINT = "STAT_POINT",// + 1 point de stat à répartir
    CLASS_POINT = "CLASS_POINT",// + 1 point de classe à répartir
    SPELL = "SPELL"
}
export declare enum RelicLineRarity {
    COMMON = "COMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    LEGENDARY = "LEGENDARY"
}
export type RelicTarget = StatKey | ClassName;
/**
 * Une proposition de ligne de relique hebdomadaire
 */
export interface RelicLine {
    type: RelicLineType;
    value: number;
    rarity: RelicLineRarity;
    spellId?: number;
    spellName?: string;
    target?: RelicTarget;
    optionId: string;
    id: string;
}
export interface RelicSlot {
    spellId?: number;
    isUnlocked: boolean;
}
export interface Relic {
    id: string;
    /** 4 slots pour équiper des relic spells */
    slots: [RelicSlot, RelicSlot, RelicSlot, RelicSlot];
    /** Inventaire de tous les spellId de relicItem disponibles et débloqués */
    inventory: number[];
    createdAt: string;
}
