import { ClassName, ClassRecord } from "./character";
import { Item } from "./item";
import { StatKey, StatRecord } from "./stat";
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
    spellDescription?: string;
    target?: RelicTarget;
    optionId: string;
    id: string;
}
export interface Relic {
    id: string;
    stats: StatRecord;
    class: ClassRecord;
    gold: number;
    reroll: number;
    statPoint: number;
    classPoint: number;
    /** Passifs simples portés par le compte (si peuplés côté API) */
    items: Item[];
    /** Options tirées cette semaine (3 lignes à choisir côté UI) */
    weeklyLine?: RelicLine[];
    createdAt: string;
}
