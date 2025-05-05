import { ClassRecord } from "./character";
import { DamageMeterState } from "./damageMeter";
import { Item } from "./item";
import { StatRecord } from "./stat";

// --- FIGHT DATA ---

export interface FightState {
    teams: TeamsState[];
    damageMeter: DamageMeterState;
}

export interface TeamsState {
    teamId: string;
    members: FighterState[];
}

export interface FighterState {
    id: string;
    name: string;
    level: number;
    stats: StatRecord;
    class: ClassRecord;
    items: Item[];
    modelName: string;
    maxLifePoint: number;
    actualLifePoint: number;
    isAlive: boolean;
}

// --- LOG TYPES ---

export type CombatLog =
    | FightDataLog
    | SpellPerformedLog
    | DamageDealtLog
    | HealPerformedLog
    | DodgePerformedLog
    | BuffAppliedLog
    | BuffExpiredLog
    | HealthUpdateLog
    | CharacterDiedLog;

// === FIGHT DATA ===
export interface FightDataLog {
    type: "FightData";
    data: FightState;
}

// === SPELL ===
export interface SpellPerformedLog {
    type: "SpellPerformed";
    data: {
        sourceId: string;
        targetId: string[];
        spellName: string;
        timestamp: number;
    };
}

// === DAMAGE ===
export interface DamageDealtLog {
    type: "DamageDealt";
    data: {
        sourceId: string;
        targetId: string;
        amount: number;
        isCrit: boolean;
        spellName: string;
    };
}

// === HEAL ===
export interface HealPerformedLog {
    type: "HealPerformed";
    data: {
        sourceId: string;
        targetId: string;
        amount: number;
        isCrit: boolean;
        spellName: string;
    };
}

// === DODGE ===
export interface DodgePerformedLog {
    type: "DodgePerformed";
    data: {
        dodgerId: string;
    };
}

// === BUFF APPLIED ===
export interface BuffAppliedLog {
    type: "BuffApplied";
    data: {
        charId: string;
        buffName: string;
        charge: number;
    };
}

// === BUFF EXPIRED ===
export interface BuffExpiredLog {
    type: "BuffExpired";
    data: {
        charId: string;
        buffName: string;
        charge: number;
    };
}

// === HEALTH UPDATE ===
export interface HealthUpdateLog {
    type: "HealthUpdate";
    data: {
        charId: string;
        currentHealth: number;
        maxHealth: number;
    };
}

// === CHARACTER DIED ===
export interface CharacterDiedLog {
    type: "CharacterDied";
    data: {
        charId: string;
        killerId: string;
    };
}
