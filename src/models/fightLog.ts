import { AuraSnapshot } from "./aura";
import { ClassRecord } from "./character";
import { DamageMeterState } from "./damageMeter";
import { Item } from "./item";
import { StatRecord } from "./stat";
import { StatusSnapshot } from "./status";

// --- FIGHT DATA ---

export interface FightState {
    teams: TeamsState[];
    damageMeter: DamageMeterState;
    startTime: number;
    status: 'INITIALIZING' | 'SETUP' | 'ONGOING' | 'ENDED';
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
    auras: AuraSnapshot[]
    statuses: StatusSnapshot[]
    figherType: "Player" | "Boss" | "Minion",
    invokerId: string | null
}

// --- LOG TYPES ---

export type CombatLog =
    | FightDataLog
    | SpellPerformedLog
    | AttackPerformedLog
    | DamageDealtLog
    | HealPerformedLog
    | DodgePerformedLog
    | HealthUpdateLog
    | CharacterDiedLog
    | StatChangedLog
    | AuraChangedLog;

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

export interface AttackPerformedLog {
    type: "AttackPerformed";
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
export interface StatChangedLog {
    type: "StatChanged";
    data: {
        charId: string,
        newStat: StatRecord
    }
}


export interface AuraChangedLog {
    type: "AuraUpdate";
    data: {
        charId: string,
        auras: AuraSnapshot[]
    }
}

export interface StatusChangedLog {
    type: "StatusUpdate";
    data: {
        charId: string,
        statuses: StatusSnapshot[]
    }
}
