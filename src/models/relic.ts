// packages/common/models/relic.ts

import { ClassRecord } from "./character";
import { Item } from "./item";
import { StatRecord } from "./stat";

export enum RelicLineType {
    STAT = "STAT",            // + Stat fixe (sauf vie)
    CLASS = "CLASS",          // + 1 point de classe (fixe)
    GOLD = "GOLD",            // + Gold
    REROLL = "REROLL",        // + Relance
    STAT_POINT = "STAT_POINT",// + 1 point de stat à répartir
    CLASS_POINT = "CLASS_POINT", // + 1 point de classe à répartir
    SPELL = "SPELL",          // + passif simple (spellId)
}

export enum RelicLineRarity {
    COMMON = "COMMON",
    RARE = "RARE",
    EPIC = "EPIC",
    LEGENDARY = "LEGENDARY",
}

/**
 * Une proposition de ligne de relique hebdomadaire
 * - `optionId` encode le “quoi” (ex: "STAT:Power", "CLASS:Invoker", "SPELL:9001")
 */
export interface RelicLine {
    type: RelicLineType;
    value: number;
    rarity: RelicLineRarity;
    spellId?: number;
    optionId: string;
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
