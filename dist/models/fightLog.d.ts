import { ClassRecord } from "./character";
import { DamageMeterState } from "./damageMeter";
import { Item } from "./item";
import { StatRecord } from "./stat";
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
    figherType: "Player" | "Boss" | "Minion";
    invokerId?: string;
}
export type CombatLog = FightDataLog | ForceRerenderLog | SpellPerformedLog | DamageDealtLog | HealPerformedLog | DodgePerformedLog | BuffAppliedLog | BuffExpiredLog | HealthUpdateLog | CharacterDiedLog | StatChangedLog;
export interface FightDataLog {
    type: "FightData";
    data: FightState;
}
export interface ForceRerenderLog {
    type: "ForceRerender";
}
export interface SpellPerformedLog {
    type: "SpellPerformed";
    data: {
        sourceId: string;
        targetId: string[];
        spellName: string;
        timestamp: number;
    };
}
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
export interface DodgePerformedLog {
    type: "DodgePerformed";
    data: {
        dodgerId: string;
    };
}
export interface BuffAppliedLog {
    type: "BuffApplied";
    data: {
        charId: string;
        buffName: string;
        charge: number;
    };
}
export interface BuffExpiredLog {
    type: "BuffExpired";
    data: {
        charId: string;
        buffName: string;
        charge: number;
    };
}
export interface HealthUpdateLog {
    type: "HealthUpdate";
    data: {
        charId: string;
        currentHealth: number;
        maxHealth: number;
    };
}
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
        charId: string;
        newStat: StatRecord;
    };
}
