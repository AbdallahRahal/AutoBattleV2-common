import { ClassRecord } from "./character";
import { Item } from "./item";
import { StatRecord } from "./stat";

// Log générique
export interface CombatLog {
    type: string;
    data: any;
}

export interface FightDataLog extends CombatLog {
    type: "FightData";
    data: FightState;
}


export interface FightState {
    teams: TeamsState[]
}

export interface TeamsState {
    teamId: string;
    members: FighterState[];
}

export interface FighterState {
    name: string;
    level: number;
    stats: StatRecord;
    class: ClassRecord;
    items: Item[];
    modelName: string;

    actualLifePoint: number;
}

export interface SpellPerformedLog extends CombatLog {
    type: "SpellPerformed";
    data: SpellPerformedLogData;
}
export interface SpellPerformedLogData {
    sourceId: string;
    targetId: string[];
    spellName: string;
    timestamp: number;
}
// Logs de Dégâts
export interface DamageDealtLog extends CombatLog {
    type: "DamageDealt";
    data: {
        sourceId: string;
        targetId: string;
        amount: number;
        isCrit: boolean;
        spellName: string;
    };
}

// Logs de Soins
export interface HealPerformedLog extends CombatLog {
    type: "HealPerformed";
    data: {
        sourceId: string;
        targetId: string;
        amount: number;
        isCrit: boolean;
        spellName: string;
    };
}
export interface DodgePerformedLog extends CombatLog {
    type: "DodgePerformed";
    data: {
        sourceId: string;
        targetId: string;
    };
}
// Logs de Buffs/Debuffs
export interface BuffAppliedLog extends CombatLog {
    type: "BuffApplied";
    data: {
        charId: string;
        buffName: string;
        charge: number;
    };
}

export interface BuffExpiredLog extends CombatLog {
    type: "BuffExpired";
    data: {
        charId: string;
        buffName: string;
        charge: number;

    };
}

export interface HealthUpdateLog extends CombatLog {
    type: "HealthUpdate";
    data: {
        charId: string;
        currentHealth: number;
        maxHealth: number;
    };
}

export interface CharacterDiedLog extends CombatLog {
    type: "CharacterDied";
    data: {
        charId: string;
        killerId: string;
    };
}

